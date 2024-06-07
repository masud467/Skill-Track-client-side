import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth"
// import { FaUtensils } from "react-icons/fa6";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";
import { SiGoogleclassroom } from "react-icons/si";
// import { useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const image_hosting_key=import.meta.env.VITE_IMGBB_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddClass = () => {
  const navigate = useNavigate()
    const{user,setLoading}= useAuth()
    const { register, handleSubmit ,reset} = useForm();
    console.log(user)

//   const axiosPublic = useAxiosPublic()
//   const axiosSecure= useAxiosSecure()

// const {mutateAsync} = useMutation({
//   mutationFn:async classData=>{
//     const {data}= await axios.post('http://localhost:6003/class',classData)
//     return data
//   },
//   onSuccess:()=>{
//      console.log('Data Saved Successfully')
//     toast.success('class added successfully.')
//     navigate('/dashboard/my-class')
//     setLoading(false)
//   }
// })
  const onSubmit = async(data) => {
    console.log(data);
    const teacher={
      name:user?.displayName,
      image:user?.photoURL,
      email:user?.email
    }
    // image upload to imgbb and then get url
    const imageFile ={image:data.image[0]}

    
      const res=await axios.post(image_hosting_api,imageFile,{
        headers:{
           " content-type":"multipart/form-data"
        }
      
    })
    if(res.data.success){
      const classData = {
        title:data.title,
        category:data.category,
        price:parseFloat(data.price),
        description:data.description,
        phone:data.phone,
        image:res.data.data.display_url,
        status:'pending',
        teacher:teacher
        
      }
      console.log(classData)
      // await mutateAsync(classData)
      const classRes= await axios.post('http://localhost:6003/class',classData)
      console.log(classRes.data)
      if(classRes.data.insertedId){
        reset()
        navigate('/dashboard/my-classes')
        setLoading(false)
        // show success popUp
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added .`,
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
    

    // console.log(res.data)
}
    return (
        <div>
            <SectionTitle heading='add an class'>
                
            </SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full py-5 ">
            <div className="label">
              <span className="label-text">Class Title*</span>
            </div>
            <input
              type="text"
              placeholder="class title"
              {...register("title",{required:true})}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" grid grid-cols-2 gap-5">
            {/* category */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category",{required:true})}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="web development">Web Development</option>
                <option value="app development">App Development</option>
                <option value="data engineering">Data Engineering</option>
                <option value="cyber security">Cyber Security</option>
                <option value="digital marketing">Digital Marketing</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder="price"
                {...register("price",{required:true})}
                className="input input-bordered w-full "
              />
            </div>
            {/* Name */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Name*</span>
              </div>
              <input
                type="text"
                defaultValue={user&&user?.displayName?user?.displayName:''}
               readOnly
                {...register("name",{required:true})}
                className="input input-bordered w-full "
              />
            </div>
            {/* Email */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Email Address*</span>
              </div>
              <input
                type="email"
                defaultValue={user&&user?.email?user?.email:''}
                readOnly
                
                {...register("email",{required:true})}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* Phone Number */}
          <div className="form-control w-1/2 ">
              <div className="label">
                <span className="label-text">Phone Number*</span>
              </div>
              <input
                type="number"
               
              
                placeholder="Enter your phone number here"
                {...register("phone",{required:true})}
                className="input input-bordered w-full "
              />
            </div>
          <label className="form-control py-5">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
            {...register('description')}
              className="textarea textarea-bordered h-24"
              placeholder="description"
            ></textarea>
          </label>
          <div className="form-control w-full py-5 ">
          <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
          </div>

          <button className="btn">
            Add Class <SiGoogleclassroom className="ml-3 text-xl"></SiGoogleclassroom>
          </button>
        </form>
      </div>
        </div>
    );
};

export default AddClass;
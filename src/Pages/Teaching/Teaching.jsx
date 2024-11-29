import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";
// import { useEffect } from "react";
import useRole from "../../hooks/useRole";

const Teaching = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const { register, handleSubmit, reset } = useForm();

  // console.log(user)
  // const onSubmit = async(data) => {
  //     console.log(data);
  //     try{

  //       const currentUser = {
  //         ...data,
  //         email: user?.email,
  //         role: "student",
  //         status:"Requested"
  //     };
  //         const res = await axios.put('https://skill-track-for-server.vercel.app/user',currentUser)
  //         console.log(res.data)
  //         Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Submitted!",
  //             text:'Your request has been submitted for review.',
  //             showConfirmButton: false,
  //             timer: 1500
  //           });
  //         reset();
  //     }catch(err){
  //         console.log('error saving teacher',err)
  //         Swal.fire({
  //             position: "top-end",
  //             icon: "error",
  //             title:'Error!',
  //             text: "There was an error submitting your request.Please try again.",
  //             showConfirmButton: false,
  //             timer: 1500
  //           });
  //     }

  //     // console.log(res.data)
  // }

  // useEffect(() => {
  //   // Check if the user's role is not 'student'
  //   if (user && role !== "student") {
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "error",
  //       title: "Access Denied!",
  //       text: "Only students can request to become an instructor.",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     }).then(() => {
  //       // Redirect to the home page or another relevant page
  //     });
  //   }
  // }, [user, role]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const currentUser = {
        ...data,
        email: user?.email,
        image: user?.photoURL,
        name: user?.displayName,
        role: "student",
        status: "Requested",
      };
      const res = await axios.put(
        "https://skill-track-for-server.vercel.app/user",
        currentUser
      );
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Submitted!",
        text: "Your request has been submitted for review.",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    } catch (err) {
      console.log("error saving teacher", err);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error!",
        text: "There was an error submitting your request. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="pt-20">
      <SectionTitle heading="Request as an instructor"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-2 gap-5">
            {/* Name */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Name*</span>
              </div>
              <input
                type="text"
                defaultValue={
                  user && user?.displayName ? user?.displayName : ""
                }
                readOnly
                {...register("name", { required: true })}
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
                defaultValue={user && user?.email ? user?.email : ""}
                readOnly
                {...register("email", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            {/* image */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Image*</span>
              </div>
              <input
                type="text"
                readOnly
                defaultValue={user && user?.photoURL ? user?.photoURL : ""}
                {...register("image", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            {/* experience */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Experience*</span>
              </div>
              <select
                defaultValue="default"
                {...register("experience", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select an experience category
                </option>
                <option value="beginner">Beginner</option>
                <option value=" mid-level"> Mid-level</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            {/* title */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Class Title*</span>
              </div>
              <input
                type="text"
                placeholder="class title"
                {...register("title", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            {/* category */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
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
          </div>

          <div className="text-center mt-5">
            {role === "student" || role === "teacher" ? (
              <button className="btn btn-primary">
                Request as an instructor
              </button>
            ) : (
              <button className="btn btn-primary" disabled>
                Request as an instructor
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Teaching;

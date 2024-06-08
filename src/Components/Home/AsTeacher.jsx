import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AsTeacher = () => {
  const{user}= useAuth()

  // handle request for as a teacher
  const handleBecomeTeacher=async()=>{
    console.log('I want to be a teacher')
    try{
        const currentUser={
            email:user?.email,
        role:"student",
        status:'Requested'
        }
        const {data} =await axios.put('http://localhost:6003/user',currentUser)
        console.log(data)
        if(data.modifiedCount>0){
          toast.success('success! Your request to become a teacher has been submitted successfully. Please wait for admin approval.')
        }else{
          toast.success('You have already submitted a request to become a teacher. Please! wait for admin approval.')
        }
    }catch(err){
        console.log(err)
    }
}
  return (
    <div className="mt-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img
          className="w-1/2 p-5"
          src="https://i.ibb.co/d6wsrhw/elegant-businessman-office.jpg"
          alt="Instructor"
        />
        <div className="card-body">
          <h2 className="card-title">Become an instructor</h2>
          <p>Are you passionate about sharing your expertise? Join SkillTrack and reach a global audience of motivated students. Earn income by teaching subjects you love, with the support and resources you need to succeed. Start teaching today and become a part of our vibrant learning community. Click the button below to begin your journey with SkillTrack.</p>
          <div className=" ">
            <Link to='/instructor'><button onClick={handleBecomeTeacher} className="btn btn-primary w-full text-xl font-medium"> Start teaching today</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsTeacher;

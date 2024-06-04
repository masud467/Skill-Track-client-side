import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { signIn,loading,signInWithGoogle}=useAuth()
    const navigate =useNavigate()
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        console.log(data)
        // const formData= new FormData()
        // formData.append("image",data.image[0])
        // console.log(formData)
        
        
        // try{
         
                  
                    
                    // register user
                    const res= await signIn(data.email,data.password)
                    console.log(res)
                    
                    navigate('/')
                    toast.success('SignUp success.')
                // }
                // catch(err){
                //     console.log(err)
                //     toast.error(err.message)
                // }
    }

    const handleGoogleSignIn = async () => {
        try {
          await signInWithGoogle()
    
          navigate('/')
          toast.success('Login Successful')
        } catch (err) {
          console.log(err)
          toast.error(err.message)
        }
      }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter Your Email Here" className="input input-bordered" required />
          {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password", {
                    required: true,
                    
                  })} name="password" autoComplete="new-password" placeholder="******" className="input input-bordered" required />
                   
                
                
               
          
        </div>
        <div className="form-control mt-6">
        <button
              disabled={loading}
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
        </div>
      </form>
      <div className='flex items-center  space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        
        <p className='px-6 pb-5 text-sm text-center '>
        New here? {' '}
          <Link

            to='/signup'
            className='hover:underline hover:text-red-600 '
          >
            SignUp
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Login;
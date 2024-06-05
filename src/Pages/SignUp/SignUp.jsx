import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";


const SignUp = () => {
    const {createUser,userProfileUpdate, signInWithGoogle,loading}=useAuth()
    const navigate =useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        console.log(data)
        const imageFile ={image:data.photo[0]} 
        console.log('imageFile',imageFile)
        // try{    
                    // 1.upload image and get image url from imgBB
                    const result= await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                    imageFile,{
                        headers:{
                            " content-type":"multipart/form-data"
                        }
                    }
                    )
                    console.log(result.data.data.display_url)
                    // register user
                    const res= await createUser(data.email,data.password)
                    console.log(res)
                    // update profile
                    await userProfileUpdate(data.name,result.data.data.display_ur)
                    navigate('/')
                    toast.success('SignUp success.')
                // }
                // catch(err){
                //     console.log(err)
                //     toast.error(err.message)
                // }
    }

    // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()

      navigate('/')
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
    // const handleSignUp =async e=>{
    //     e.preventDefault()
    //     const form= e.target 
    //     const name =form.name.value 
    //     const email =form.email.value 
    //     const image =form.image.files[0]
    //     const password =form.password.value 
    //     console.log(name,email,password)
    //     // console.log(image)
    //     const formData= new FormData()
    //     formData.append("image",image)

    //     try{
    //        setLoading(true)
    //         // 1.upload image and get image url from imgBB
    //         const {data}= await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    //         formData
    //         )
    //         console.log(data.data.display_url)
    //         // register user
    //         const res= await createUser(email,password)
    //         console.log(res)
    //         // update profile
    //         await userProfileUpdate(name,data.data.display_ur)
    //         navigate('/')
    //         toast.success('SignUp success.')
    //     }
    //     catch(err){
    //         console.log(err)
    //         toast.error(err.message)
    //     }

    // }
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
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"  {...register("name", { required: true })} placeholder="Enter Your Name Here" className="input input-bordered"  />
          {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
        </div>
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
            <span className="label-text">Select Image</span>
          </label>
          <input type="file"   {...register("photo", { required: true })} name="photo" accept="photo/*" className="input input-bordered" required />
          {errors.image && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })} name="password" autoComplete="new-password" placeholder="******" className="input input-bordered" required />
                   {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one uppercase,one lowercase,one number
                    and one spacial character.
                  </p>
                )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
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
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
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
          Already have an account?{' '}
          <Link

            to='/login'
            className='hover:underline hover:text-red-600 '
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
</div>
        
    );
};

export default SignUp;
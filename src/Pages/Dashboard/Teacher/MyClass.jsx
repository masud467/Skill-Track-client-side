import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Shared/Loading/Loading";





const MyClass = () => {
  const { user } = useAuth();
  const queryClient= useQueryClient()
  // fetch classes data with tansTack query
  const {
    data:classes=[],
    isLoading,
  
  } = useQuery({
    queryKey: ["my-classes", user?.email],
    queryFn: async () => {
        
      const { data } = await axios.get(`http://localhost:6003/my-classes/${user?.email}`);
    console.log('api res',data)
      return data;
    },
    
  })

  // delete mutation

  const deleteMutation= useMutation({
    mutationFn:async(id)=>{
      await axios.delete(`http://localhost:6003/my-classes/${id}`)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(['my-classes',user?.email])
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'The class has been deleted.',
      });
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error deleting the class.',
      });
    },
  })

// handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };
 
            
    
  
  if(isLoading) return <Loading></Loading>;
//   console.log(classes)

  
  return (
    
    <div className="grid grid-cols-2 gap-10 mb-5">  
        
      { classes?.length===0? <div>No classes available</div> 
      :
      classes.map((item) => (
        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-64" src={item?.image} alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Course Title: {item.title}</h2>
            <p><span className="font-medium">Price:</span> ${item.price}</p>
            
            <p><span className="font-medium">Instructor:</span> {item.teacher.name}</p>
            <p><span className="font-medium">Instructor email:</span>  {item.teacher.email}</p>
            <p><span className="font-medium"> Description:</span> {item.description}</p>
          
            <p><span className="font-medium">Status:</span> {item.status}</p>
           
           
            <div className="card-actions justify-between">
              <Link to={`/dashboard/update/${item._id}`}><button  className="btn btn-primary">Update</button></Link>
              <button onClick={()=>handleDelete(item._id)}  className="btn btn-primary">Delete</button>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default MyClass;

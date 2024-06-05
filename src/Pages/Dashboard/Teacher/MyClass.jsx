import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";


const MyClass = () => {
  const { user } = useAuth();
  const {
    data:classes=[],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["my-classes", user?.email],
    queryFn: async () => {
        
      const { data } = await axios.get(`http://localhost:6003/my-classes/${user?.email}`);
    //   console.log('api res',data)
      return data;
    },
    
  });
  if(isLoading) return <div>Loading....</div>;
//   console.log(classes)
//  const classes= Array.isArray(data)?data:[]
  
  return (
    
    <div className="md:flex md:col-span-2 gap-10 mb-5">  
        
      { classes?.length===0? <div>No classes available</div> 
      :
      classes.map((item) => (
        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default MyClass;

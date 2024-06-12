import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Loading from "../../Components/Shared/Loading/Loading";
import DetailsClassCard from "./DetailsClassCard";
import { useParams } from "react-router-dom";


const DetailsClasses = () => {

  const { id } = useParams()
    const {
        data: items = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["allClass",id],
        queryFn: async () => {
          const { data } = await axiosPublic.get(`/allClass/${id}`);
          
        return data;
        },
        enabled: !!id,
      });
      // console.log(users)
    
      if (isLoading) return <Loading></Loading>;
    return (

      <div className="pt-32">
      {items ? (
        <DetailsClassCard key={items._id} refetch={refetch} items={items} />
      ) : (
        <p>No class found</p>
      )}
    </div>
      
    //     <div className="pt-32">
    //   {items? items.map((item) => <DetailsClassCard key={item._id}
    //       refetch={refetch}
    //       item={item}></DetailsClassCard>
    //   ):<p>No class found</p>}
    // </div>
    );
};

export default DetailsClasses;
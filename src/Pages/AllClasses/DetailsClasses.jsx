import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Loading from "../../Components/Shared/Loading/Loading";
import DetailsClassCard from "./DetailsClassCard";


const DetailsClasses = () => {
    const {
        data: items = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["AllClass"],
        queryFn: async () => {
          const { data } = await axiosPublic.get("/AllClass/id");
          
        return data;
        },
      });
      // console.log(users)
    
      if (isLoading) return <Loading></Loading>;
    return (
        <div className="pt-32">
      {items.map((item) => (<DetailsClassCard key={item._id}
          refetch={refetch}
          item={item}></DetailsClassCard>
      ))}
    </div>
    );
};

export default DetailsClasses;
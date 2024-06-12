import { useQuery } from "@tanstack/react-query";
import AllClassesCard from "../../Components/Shared/Card/AllClassesCard";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Loading from "../../Components/Shared/Loading/Loading";

const AllClasses = () => {
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllClass"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/AllClass");
      return data.filter(item => item.status === 'accepted');
    //   return data;
    },
  });
  // console.log(users)

  if (isLoading) return <Loading></Loading>;
  return (
    <div className="pt-32 grid grid-cols-3 gap-10">
      {classes.map((item) => (
        <AllClassesCard
          key={item._id}
          refetch={refetch}
          item={item}
        ></AllClassesCard>
      ))}
    </div>
  );
};

export default AllClasses;

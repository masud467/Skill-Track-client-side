import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import Loading from "../../../Components/Shared/Loading/Loading";
import { Helmet } from "react-helmet";
import AllClassDataRow from "../../../Components/TableRow/AllClassDataRow";


const AllClass = () => {
    const {
        data:classes=[],
        isLoading,
        refetch
      
      } = useQuery({
        queryKey: ["AllClass"],
        queryFn: async () => {
            
          const { data } = await axiosSecure.get('/AllClass');
          // return data.filter(user => user.status === 'Requested');
        //   return data.filter(user => ['requested', 'accepted', 'rejected'].includes(user.status));
        
          return data;
        },
        
      })
      // console.log(users)
  
      if(isLoading) return <Loading></Loading>
      return (
      <>
        
        <div className='container mx-auto px-4 sm:px-8'>
          <Helmet>
            <title>Manage Users</title>
          </Helmet>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
  
                      >
                          
                        Image
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Title
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Email
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Short description
                      </th>
                      {/* <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Category
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Role
                      </th> */}
  
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Status
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                      {classes.map(classItem=><AllClassDataRow key={classItem._id} classItem={classItem} refetch={refetch}></AllClassDataRow>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
      
      );
};

export default AllClass;
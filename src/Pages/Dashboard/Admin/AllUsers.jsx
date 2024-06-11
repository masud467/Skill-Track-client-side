import { useQuery,  } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import axios from "axios";
import Loading from "../../../Components/Shared/Loading/Loading";
import UserDataRow from "../../../Components/TableRow/UserDataRow";
import { Helmet } from "react-helmet";
import { axiosSecure } from "../../../hooks/useAxiosSecure";


const AllUsers = () => {

    // const { user } = useAuth();
    // const queryClient= useQueryClient()
    // fetch classes data with tansTack query
    const {
      data:users=[],
      isLoading,
      refetch
    
    } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
          
        const { data } = await axiosSecure.get('/users');
      
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
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
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
                  </tr>
                </thead>
                <tbody>
                    {users.map(user=><UserDataRow key={user._id} user={user} refetch={refetch}></UserDataRow>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    
    );
};

export default AllUsers;
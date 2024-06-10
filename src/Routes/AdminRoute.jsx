import { Navigate } from "react-router-dom";
import Loading from "../Components/Shared/Loading/Loading";
import useRole from "../hooks/useRole";
import PropTypes from 'prop-types'


const AdminRoute = ({children}) => {
    const [role,isLoading]=useRole()
    if(isLoading) return <Loading></Loading>
    if(role==="admin") return children
    return <Navigate to='/dashboard'></Navigate>
};
AdminRoute.propTypes = {
    children: PropTypes.element,
  }

export default AdminRoute;
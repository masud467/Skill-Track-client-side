
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Shared/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
   if(loading) return <Loading></Loading>
   if(user) return children
   return <Navigate to='/login' state={location.pathname} replace='true'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.element,
  }

export default PrivateRoute;
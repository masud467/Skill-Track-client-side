import { Navigate } from "react-router-dom";
import Loading from "../Components/Shared/Loading/Loading";
import useRole from "../hooks/useRole";
import PropTypes from 'prop-types'

const TeacherRoute = ({children}) => {
    const [role,isLoading]=useRole()
    if(isLoading) return <Loading></Loading>
    if(role==="teacher") return children
    return <Navigate to='/dashboard'></Navigate>
};
TeacherRoute.propTypes = {
    children: PropTypes.element,
  }

export default TeacherRoute;
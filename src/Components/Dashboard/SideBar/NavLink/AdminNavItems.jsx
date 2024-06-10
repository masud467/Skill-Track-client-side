
import { FaUsers } from "react-icons/fa";
import NavItems from "./NavItems";
import { SiGoogleclassroom, SiOpenaccess } from "react-icons/si";


const AdminNavItems = () => {
    return (
        <>
         <NavItems
                icon={SiOpenaccess} label='Teacher Request' address='teacher-request'
              >
                {" "}
              </NavItems>
         <NavItems
                icon={FaUsers} label='All Users' address='all-users'
              >
                {" "}
              </NavItems>
         <NavItems
                icon={SiGoogleclassroom} label='All Classes' address='all-classes'
              >
                {" "}
              </NavItems>
         
      </>
    );
};

export default AdminNavItems;
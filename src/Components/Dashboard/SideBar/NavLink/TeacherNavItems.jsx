import { MdLibraryAdd } from "react-icons/md";
import NavItems from "./NavItems";
import { SiGoogleclassroom } from "react-icons/si";
import { CgDetailsMore } from "react-icons/cg";


const TeacherNavItems = () => {
    return (
        <div>
            {/* Add Room */}
            <NavItems
                label="Add Class"
                address="add-class"
                icon={MdLibraryAdd}
              >
                {" "}
              </NavItems>

              {/* My Listing */}
              <NavItems
                label="My Classes"
                address="my-classes"
                icon={SiGoogleclassroom}
              >
                {" "}
              </NavItems>
              <NavItems
                label="My Classes Details"
                address="my-classes-details"
                icon={CgDetailsMore}
              >
                {" "}
              </NavItems>
        </div>
    );
};

export default TeacherNavItems;
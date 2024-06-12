
import {  MdPayments } from "react-icons/md";
import NavItems from "./NavItems";

import { RiAdminLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";


const StudentNavItems = () => {
    return (
        <div>
             <NavItems
                icon={SiGoogleclassroom}
                label='My Enroll Class'
                address='my-enroll-class'
              >
                {" "}
              </NavItems>
             <NavItems
                icon={MdPayments}
                label='Payment'
                address='payment'
              >
                {" "}
              </NavItems>
              <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
        <RiAdminLine className='w-5 h-5' />

        <span className='mx-4 font-medium'>Become A Teacher</span>
      </div>
        </div>
    );
};

export default StudentNavItems;
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import avatarImg from "../../../assets/images/placeholder.jpg";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => [
          isActive
            ? "text-green-500 underline underline-offset-4"
            : "text-black",
        ]}
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        to="/all-classes"
        className={({ isActive }) => [
          isActive
            ? "text-green-500 underline underline-offset-4"
            : "text-black",
        ]}
      >
        <li>
          <a>All Classes</a>
        </li>
      </NavLink>
      <NavLink
        to="/instructor"
        className={({ isActive }) => [
          isActive
            ? "text-green-500 underline underline-offset-4"
            : "text-black",
        ]}
      >
        <li>
          <a>Teach on SkillTrack</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar fixed max max-w-7xl bg-white z-10 shadow-sm">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex items-center justify-center lg:gap-5 gap-2">
            <Link to="/">
              <img className="w-16 rounded-md " src="/logo1.png" alt="" />
            </Link>
            <Link to="/">
              <a className=" md:text-4xl text-2xl font-medium ">SkillTrack</a>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end"></div>

        <div onClick={() => setIsOpen(!isOpen)}>
          {/* <AiOutlineMenu className="w-7 h-7" /> */}
          <div className="hover:cursor-pointer">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user?.photoURL : avatarImg}
              alt="profile"
              height="50"
              width="50"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <div
                  onClick={logOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

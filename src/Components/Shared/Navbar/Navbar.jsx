import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navItems= <>
    <NavLink to='/'><li><a>Home</a></li></NavLink>
    <NavLink to='/all-classes'><li><a>All Classes</a></li></NavLink>
    <NavLink><li><a>Teach on SkillTrack</a></li></NavLink>
     
        
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <Link to='/'><img className="w-16 rounded-md mr-5" src="/logo1.png" alt="" /></Link>
    <Link to='/'><a className=" text-4xl font-medium">SkillTrack</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign In</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
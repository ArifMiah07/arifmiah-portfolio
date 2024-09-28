import { Link, NavLink } from "react-router-dom";


const Nav = ({heading, btnText}) => {

    const navLinks = <>
        <li><NavLink to={'/'} 
        className={({ isActive,}) => isActive ? "bg-[#008C45]" : "text-black"}
        >Home</NavLink></li>
        <li><NavLink to={'/about'}
        className={({ isActive,}) => isActive ? "bg-[#008C45]" : "text-black"}
        >About</NavLink></li>
        <li><NavLink to={'/projects'}
        className={({ isActive,}) => isActive ? "bg-[#008C45]" : "text-black"}
        >Projects</NavLink></li>
        <li><NavLink to={'/Contact'}
        className={({ isActive,}) => isActive ? "bg-[#008C45]" : "text-black"}
        >Contact</NavLink></li>
        <li><NavLink to={'/Blogs'}
        className={({ isActive,}) => isActive ? "bg-[#008C45]" : "text-black"}
        >Blogs</NavLink></li>
    </>
    return (
        <div className="text-white navbar bg-[#5C25C8]">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="font-raleway menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navLinks}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl font-montserrat font-bold">{heading}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-raleway menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn font-poppins font-semibold">{btnText}</a>
            </div>
        </div>
    );
};

export default Nav;
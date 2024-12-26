import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/jobs'>Jobs</NavLink></li>
        <li><NavLink to='/my_jobs'>My Jobs</NavLink></li>
        <li><NavLink to='/add_job'>Add Job</NavLink></li>
    </>

    const handleLogout = () => {
        logout()
            .then()
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="navbar bg-base-100">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <ul >

                    {
                        user ? <li onClick={handleLogout} className="btn">Logout</li>
                            :
                            <ul className="menu menu-horizontal px-1">
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </ul>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Navbar;
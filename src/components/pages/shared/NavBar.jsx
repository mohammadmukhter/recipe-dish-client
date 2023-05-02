import React from "react";
import { Link } from "react-router-dom";
import userImage from "../../../assets/user.jpg";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-stone-800 text-white px-5 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52 z-30"
            >
              <li>
                <Link>Home</Link>
                <Link>Blog</Link>
                <Link>About</Link>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" font-bold normal-case text-xl ps-0">
            RecipeDish
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
              <Link>Blog</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full">
            <img src={userImage} />
          </div>
          <Link className="btn">Login</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

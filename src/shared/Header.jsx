import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allToys">All Toy's</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/myToys">My Toy's</Link>
              </li>

              <li>
                <Link to="/updateToys">Add a Toy</Link>
              </li>
            </>
          )}
          </ul>
        </div>
        <div className="w-8 rounded-full mr-2 cursor-pointer">
          <img
            className="rounded-full"
            src="https://img.freepik.com/free-vector/vintage-robot-toy-white-background_1308-77501.jpg?w=360&t=st=1684349843~exp=1684350443~hmac=d289b3e324b5c14753fae5ae678f5a0296e13a6bdc901e4c81bedd5cc06f26b5"
          />
        </div>

        <p className="font-bold text-2xl cursor-pointer">
          Robo
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            King
          </span>
          dom
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-bold menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allToys">All Toy's</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/myToys">My Toy's</Link>
              </li>

              <li>
                <Link to="/updateToys">Add a Toy</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <Link>
            <div className="avatar">
              <div title={user.displayName} className="w-12 mr-5 mt- rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            
          </Link>
        )}

        {user ? (
          <Link to="/">
            <button
              onClick={handelLogout}
              className="px-4 py-2 rounded-md
          text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              className="px-4 py-2 rounded-md
          text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

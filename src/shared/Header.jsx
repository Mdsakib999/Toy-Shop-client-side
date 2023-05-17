import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>All Yoys</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="w-8 rounded-full mr-2">
          <img className="rounded-full" src="https://img.freepik.com/free-vector/vintage-robot-toy-white-background_1308-77501.jpg?w=360&t=st=1684349843~exp=1684350443~hmac=d289b3e324b5c14753fae5ae678f5a0296e13a6bdc901e4c81bedd5cc06f26b5"/>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl"></a> */}
        <p className="font-bold text-lg">Robo<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">King</span>dom</p>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;

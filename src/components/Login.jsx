import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {


    const [error, setError] = useState('');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">Login Page</h1>

      <form
        // onSubmit={handleLogin}
        className="lg:w-[30%] mx-auto bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-[50%] mx-auto px-4 py-2 rounded-md
            text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400"
          >
            Login
          </button>
        </div>
        <p className="mt-4">
          New to RoboKingdom?
           <Link className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold ml-2" to="/register">
            Register
          </Link>
        </p>
      </form>
      <p className="text-red-600 text-center font-bold">{error}</p>
      <div className="text-center">
        <button
        //   onClick={handelGoogleSignIn}
          className="b bg-slate-50 rounded-lg ml-6 py-2 px-5 font-bold "
        >
          
          <i class="fa-brands fa-google"></i> Login with Google
        </button>
        <br />
        {/* <button
        //   onClick={handelGithubSignIn}
          className="b bg-slate-50 rounded-lg mt-5 ml-6 mb-20 py-2 px-5 font-bold "
        >
          {" "}
          <i class="fa-brands fa-github text-xl"></i> Login with Github
        </button> */}
      </div>
    </div>
  );
};

export default Login;

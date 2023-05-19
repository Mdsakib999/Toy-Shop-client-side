import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {createUser, googleSignIn} = useContext(AuthContext)

    const [error, setError] = useState('');

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [password, setPassword] = useState("");

  const handleSignUp = (event)=>{
    event.preventDefault();
    setError('')
    console.log(name, email, url, password);
    if(!/.{6}/.test(password)) {
      setError("Password should be at last 6 Character.");
      return;
    }

    createUser(email, password)
    
    .then(result => {
      const ceratedUser = result.user;
      console.log(ceratedUser);
      // navigate(from, {replace: true});
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  };


  const handelGoogleSignIn = () =>{
    googleSignIn()
    .then((result) => {
      const loggedUser = result.user;
      // toast.success("Login successfully!");
      console.log(loggedUser);
      // navigate(from, {replace: true});
    })
    .catch((error) => {
      console.log(error.message);
      setError(error.message);
    });
  };


    return (
        <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">Registration Page</h1>

      <form
        onSubmit={handleSignUp}
        className="lg:w-[30%] mx-auto bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Shakib AL Hasan"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
            Photo URL:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="url"
            type="text"
            placeholder="photo.jpj"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
          />
        </div>
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
            Register
          </button>
        </div>
        <p className="mt-4">
          Already have an account?
           <Link className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold ml-2" to="/login">
            Login
          </Link>
        </p>
      </form>
      <p className="text-red-600 text-center font-bold">{error}</p>
      <div className="text-center">
        <button
          onClick={handelGoogleSignIn}
          className="b border-sky-500 bg-slate-50 rounded-lg ml-6 py-2 px-5 font-bold mb-10 hover:border-sky-500"
        >
          
          <i className="fa-brands fa-google"></i> SignUp with Google
        </button>
        
      </div>
    </div>
    );
};

export default Register;
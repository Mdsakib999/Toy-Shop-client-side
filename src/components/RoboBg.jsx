import React from "react";
import { Link } from "react-router-dom";

const RoboBg = () => {
  
  return (
    <div className="relative rounded-xl">
      <img
        className="h-[400px] w-[90%] mx-auto mt-32 shadow-lg rounded-xl"
        src="https://i.ibb.co/dsZ4CZd/robo-group.jpg"
        alt="Shoes"
      />

      <div className="absolute top-0 lg:left-16 rounded-xl bg-gradient-to-r from-cyan-300 to-[rgba(50, 5, 5, 0)] w-[70%] h-full">
        <p className="lg:pl-32 pl-20 pt-20 lg:pt-20 lg:font-bold text-4xl lg:w-[60%] text-white font-mono">
          Unleash endless adventures with our incredible line of robot toys.
        </p>
        <Link className="pl-32 " to="/allToys">
          <button
            className="px-4 w-[50%] lg:w-[20%] mt-6 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoboBg;

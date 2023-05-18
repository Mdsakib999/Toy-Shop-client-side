import React from "react";
import animation from "../assets/131315-bot-robot.json";
import Lottie from "lottie-react";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <div className="w-[50%]">
          <h1 className="text-5xl font-semibold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              RoboKingdom
            </span>{" "}
            The Ultimate Robot Emporium! Discover the Perfect Toy & Shop Now!!
          </h1>
          <p className="text-slate-500 hover:text-black">
            "Welcome to the Ultimate Robot Emporium! Unleash Boundless
            Excitement with Our Spectacular Collection of Robotic Marvels.
            Explore, Play, and Bring Home Your Perfect Mechanical Companion at
            RoboKingdom!"
          </p>
        </div>
        <div>
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
      </div>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;

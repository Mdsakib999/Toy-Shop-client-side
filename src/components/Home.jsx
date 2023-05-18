import React from "react";
import animation from "../assets/131315-bot-robot.json";
import Lottie from "lottie-react";
import Gallery from "./Gallery";
import Category from "./Category";
import Reviow from "./Reviow";
import RoboBg from "./RoboBg";

const Home = () => {
  return (
    <div>
      <div className="lg:flex justify-evenly items-center">
        <div className="lg:w-[50%] p-10 lg:p-0">
          <h1 className="lg:text-5xl font-semibold mb-4 leading-tight">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              RoboKingdom, 
            </span>
            The Ultimate Robot Emporium!!!
          </h1>
          <p className="text-4xl mb-4"> Discover the Perfect Toy & Shop Now!!</p>
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
      <RoboBg></RoboBg>
      <Category></Category>
      <Reviow></Reviow>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <p className="font-bold text-4xl mt-16 text-center">
        Our Unique Collection's
      </p>
      <p className="text-center text-slate-500 lg:w-[60%] mx-auto mt-4 mb-16 p-5 lg:p-0">
        Introducing our exclusive product collection, where innovation meets
        elegance, creating an extraordinary tapestry of style and functionality.
      </p>
      <div className="w-[95%] mx-auto grid lg:grid-cols-3 gap-y-8">
        <div className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              className="h-[300px] w-[100%] p-5"
              src="https://i.ibb.co/8gd4zK0/carRobo3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            
            <div className="card-actions justify-end">
              <Link to="/allToys">
                <button
                  className="px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              className="h-[300px] w-[100%] p-4"
              src="https://i.ibb.co/XLwMdxR/fighter-Robo2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            
            <div className="card-actions justify-end">
              <Link to="/allToys">
                <button
                  className="px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              className="h-[300px] w-[100%]"
              src="https://i.ibb.co/5R2jRDj/animal-Robo2.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            
            <div className="card-actions justify-end">
              <Link to="/allToys">
                <button
                  className="px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              className="h-[300px] w-[100%] p-3"
              src="https://i.ibb.co/RYdcbhM/713-EYg68j3-L-AC-UL600-SR600-600.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            
            <div className="card-actions justify-end">
              <Link to="/allToys">
                <button
                  className="px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              className="h-[300px] w-[100%]"
              src="https://i.ibb.co/VDZmDH4/fighter-Robo1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            
            <div className="card-actions justify-end">
              <Link to="/allToys">
                <button
                  className="px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              className="h-[300px] w-[100%] p-4"
              src="https://i.ibb.co/MDNdTNV/rovoCar.webp"
              alt="Robo Car"
            />
          </figure>
          <div className="card-body">
            
            <div className="card-actions justify-end">
              <Link to="/allToys">
                <button
                  className="px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

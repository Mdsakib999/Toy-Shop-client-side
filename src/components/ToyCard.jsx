import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
    const {toy_name, image, price, rating, availableQuantity, category} = toy;
  return (
    <div className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl my-12">
      <figure>
        <img
          className="h-[300px] w-[100%] p-4 rounded-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {toy_name}</h2>
        <div className="flex justify-between font-bold">
            <p>Available: {availableQuantity}</p>
            <p className="text-blue-600">{category}</p>
            <p><i className="fa-solid fa-star "> {rating}</i></p>
        </div>
        <div className="flex justify-between items-center gap-10 my-5">
          <>
          <Link to="/allToys">
            <button
              className="px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
            >
              View Details
            </button>
          </Link>
          </>

          <p className=" text-right text-2xl font-semibold">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

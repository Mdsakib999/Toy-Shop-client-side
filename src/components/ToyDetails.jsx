import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDtls = useLoaderData();
  const {
    _id,
    toy_name,
    image,
    price,
    rating,
    availableQuantity,
    category,
    description,
    sellerName,
    sellerEmail,
  } = toyDtls;
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-10 mb-6 text-center">
        Toy Details{toy_name}
      </h1>

      <div className="lg:flex gap-8 justify-center items-center mt-20">
        <div>
          <img
            className="h-[300px] w-[400px] p-4 rounded-lg"
            src={image}
            alt="Shoes"
          />
        </div>

        <div className="p-5 lg:p-0">
            <p className="font-semibold text-2xl">Name: {toy_name}</p>
            <p>Category: {category}</p>
            <p>Available Quantity: {availableQuantity}</p>
            <p>Seller Name: {sellerName}</p>
            <p>Seller Emile: {sellerEmail}</p>
            <p>Description: {description}</p>
            <p className="font-bold text-2xl p-3 inline-block mt-3 rounded-lg bg-slate-50 shadow-lg hover:text-sky-500">$ {price}</p>
            <br></br>
            <button
              className=" mt-6 px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
            >
              Buy Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;

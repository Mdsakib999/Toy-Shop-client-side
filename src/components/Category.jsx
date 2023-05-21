import React, { useEffect, useState } from "react";
import CategoryToy from "./CategoryToy";

const Category = () => {

  const [activeTab, setActiveTab] = useState("sfdh ");
  const [subToys, setSubToys] = useState([]);

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-mdsakib999.vercel.app/toys/${activeTab}`)
    .then(res => res.json())
    .then(result => {
      setSubToys(result);
    })
  },[activeTab])

  const handelClick = (tabName)=>{
      setActiveTab(tabName);
  };


  return (
    <div>
      <h1 className="font-bold text-4xl mt-20 text-center">Types of Robot Toys</h1>
      <p className="text-center text-slate-500 lg:w-[60%] mx-auto mt-4 mb-16 p-5 lg:p-0">
        There are different type of popular toy for young children. They can
        help children learn about different animals and their habitats.
      </p>

      <div className=" lg:w-[35%] mx-auto">
        <button
        onClick={()=> handelClick('Car Robots')}
          className={`${ activeTab == "Car Robots" ? " ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400" : "px-4 py-2 rounded-md text-black border ml-3 border-cyan-500 font-semibold text-base" }`}
        >
          Car Robots
        </button>
        <button
          onClick={()=> handelClick('Fighter Robots')}
          className={`${ activeTab == "Fighter Robots" ? "ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400" : "px-4 py-2 rounded-md text-black border ml-3 border-cyan-500 font-semibold text-base" }`}
          >
          Fighter Robots
        </button>
        <button
          onClick={()=> handelClick('Robo Animal')}
          className={`${ activeTab == "Robo Animal" ? "ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400" : "px-4 py-2 rounded-md text-black border ml-3 border-cyan-500 font-semibold text-base" }`}
          >
          Animal Robot
        </button>
      </div>

      <div className="w-[95%] mx-auto grid lg:grid-cols-3 gap-y-8">
          {
            subToys.map(subToy => <CategoryToy key={subToy._id}
            subToy={subToy}></CategoryToy>)
          }
      </div>
    </div>
  );
};

export default Category;

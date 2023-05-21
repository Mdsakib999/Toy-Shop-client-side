import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);


    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = () => {
      // Handle search logic here
      fetch(`https://b7a11-toy-marketplace-server-side-mdsakib999.vercel.app/toySearchByName/${searchQuery}`)
    .then(res => res.json())
    .then(data => {
      setToys(data);
    })
      // setSearchQuery( searchQuery);
    };

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-mdsakib999.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(()=>{
    
  },[])

  return (
    <div>

      <div className="mt-8 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="w-[95%] mx-auto grid lg:grid-cols-3 gap-y-8">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;

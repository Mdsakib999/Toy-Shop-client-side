import React, { useContext } from "react";
import { useForm } from "react-hook-form";
// import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../provider/AuthProvider";

const UpdateToys = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-6">Add a new toy</h1>
      <div className="w-[80%] mx-auto my-10 bg-slate-100 p-10 rounded-lg shadow-lg ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}

          <label className="text-lg font-medium ">Toy Name:</label>
          <input
            className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
            {...register("toy_name", { required: true })}
            placeholder="Toys Name"
            //   defaultValue="Web developer"
          />

          <label className="text-lg font-medium ml-16">Price:</label>
          <input
            className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
            {...register("price", { required: true })}
            placeholder="Price"
            type="number"
          />
          <br />

          <label className="text-lg font-medium ">Available Quantity:</label>
          <input
            className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
            {...register("availableQuantity", { required: true })}
            placeholder="Available Quantity"
            type="number"
          />

          <label className="text-lg font-medium ">Category:</label>
          <select
            className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
            {...register("category")}
          >
            <option value="Fighter Robots">Fighter Robots</option>
            <option
              value="Car Robots"
            >
              Car Robots
            </option>
            <option value="Robo Animal">Animal Robot</option>
          </select>

          <br></br>

          <label className="text-lg font-medium ">Toy's Image Url:</label>
          <input
            className="text-input w-[65%] outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
            {...register("image", { required: true })}
            placeholder="Enter toys image link"
            type="url"
            // defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <br />

<label className="text-lg font-medium ">Seller Name:</label>
          <input
            className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5 "
            value={user?.displayName}
            {...register("sellerName")}
            placeholder="Seller Name"
            type="text"
          />
          <label className="text-lg font-medium ml-10">Seller Email:</label>
          <input
            className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5 "
            value={user?.email}
            {...register("sellerEmail")}
            placeholder="your email"
            type="email"
          />
          {/* <CreatableSelect
              className="w-75"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            /> */}
            <br></br>
            <label className="text-lg font-medium ">Description:</label>
          <input
            className="text-input w-[32%] outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
            {...register("description")}
            placeholder="Description"
            type="text"
          />
          <label className="text-lg font-medium ">Rating:</label>
          <input
            className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
            {...register("rating", { required: true })}
            placeholder="Rating's"
            type="number"
          />
          <br></br>
          <div className="lg:w-[30%] mx-auto ">
          <input className="submit-btn px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ... w-[100%] mt-5 "
            value="Add Toy" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";

const MyToys = (props) => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    fetch(`http://localhost:5000/`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
    console.log(data);
    alert('product added');
  };

  const handelDelete = id => {

    const yes = confirm('Are you sure?');
    if(yes) {
        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                alert('Deleted Successful');
                const remain = myToys.filter(myToy => myToy._id !== id);
                setMyToys(remain);
            }
        })
    }
    console.log(id);
  }



  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center">My Toy's</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>#</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((myToy, index) => (
              <tr key={myToy._id}>
                <td>{index + 1}</td>
                <td>{myToy.toy_name}</td>
                <td>{myToy.sellerName}</td>
                <td>{myToy.category}</td>
                <td>{myToy.price}</td>
                <td>{myToy.availableQuantity}</td>
                <td>
                  <label htmlFor="my-modal" className="btn">
                    Edit
                  </label>

                  {/*modal body  */}
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}

                        <label className="text-lg font-medium ">
                          Toy Name:
                        </label>
                        <input
                          className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
                          {...register("toy_name", { required: true })}
                          placeholder="Toys Name"
                          //   defaultValue="Web developer"
                        />
                        <br />
                        <label className="text-lg font-medium ml-0">
                          Price:
                        </label>
                        <input
                          className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
                          {...register("price", { required: true })}
                          placeholder="Price"
                          type="number"
                        />
                        <br />

                        <label className="text-lg font-medium ">
                          Quantity:
                        </label>
                        <input
                          className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
                          {...register("availableQuantity", { required: true })}
                          placeholder="Available Quantity"
                          type="number"
                        />
                        <br></br>
                        <label className="text-lg font-medium ">
                          Category:
                        </label>
                        <select
                          className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5"
                          {...register("category")}
                        >
                          <option value="Fighter Robots">Fighter Robots</option>
                          <option value="Car Robots">Car Robots</option>
                          <option value="Robo Animal">Animal Robot</option>
                        </select>

                        <br />

                        <label className="text-lg font-medium ">
                          Seller Name:
                        </label>
                        <input
                          className="text-input outline outline-offset-2 outline-cyan-500 p-2 rounded-lg m-5 "
                          value={user?.displayName}
                          {...register("sellerName")}
                          placeholder="Seller Name"
                          type="text"
                        />

                        <br />

                        {/* <div className="lg:w-[30%] mx-auto ">
                          <input
                            className="submit-btn px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ... w-[100%] mt-5 "
                            value="Add Toy"
                            type="submit"
                          />
                        </div> */}

                        <div className="modal-action">
                          <label
                            htmlFor="my-modal"
                            className="submit-btn btn"
                            type="submit"
                          >
                            Yay!
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* moddal end */}

                  <button onClick={() => handelDelete(myToy._id)}><i className="ml-5 fa-solid fa-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data);
        })
    },[user])
    return (
        <div>
            <h1 className='font-semibold text-3xl text-center'>My Toy's</h1>
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
          {
                myToys.map((myToy, index )=> <tr key={myToy._id}>
                    <td>{index + 1}</td>
                    <td>{myToy.toy_name}</td>
                    <td>{myToy.sellerName}</td>
                    <td>{myToy.category}</td>
                    <td>{myToy.price}</td>
                    <td>{myToy.availableQuantity}</td>
                    <td><i className="ml-3 fa-solid fa-pen-to-square"></i> <i className="ml-5 fa-solid fa-trash"></i></td>
                  </tr>)
            }
          
        </tbody>
      </table>
    </div>
            
        </div>
    );
};

export default MyToys;
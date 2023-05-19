import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])


    return (
        <div>
            <h1>al toys {toys.length}</h1>


            <div className="w-[95%] mx-auto grid lg:grid-cols-3 gap-y-8">
                {
                    toys.map(toy => <ToyCard
                    key={toy._id}
                    toy={toy}
                    >

                    </ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;
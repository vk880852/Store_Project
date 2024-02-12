import React, { useEffect, useState } from 'react';
import Product from '../Component/Product'

const Home = () => {
  const api = "https://fakestoreapi.com/products";
  const [api1, setApi1] = useState(false);
  const [load, setLoad] = useState([]); // Changed setload to setLoad

  useEffect(() => {
    const fetchdata = async () => {
      setApi1(true);
      try {
        const response = await fetch(api);
        const data = await response.json();
        setLoad(data); // Changed setload to setLoad
      } catch (error) {
        console.log("Something went wrong:", error);
        setLoad([]); // Changed setload to setLoad
      }
      setApi1(false);
    };
    fetchdata();
  }, []);
  return (
    <div>
      {
        api1==false?(<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>{load.length?load.map(x=>(<Product key={x.id} x={x}/>)):<div className='flex justify-center items-center'><p>No data Found</p></div>}</div>):<p>Refresh It</p>
      }
    </div>
  );
};

export default Home;

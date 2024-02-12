import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Context/CartSlice';

const Product = (props) => {
  const p = props.x;
  const product_id = p.id;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const AddCart = () => {
    dispatch(add(p));
  };

  const removeCart = () => {
    dispatch(remove(p.id));
  };

  return (
    <div className='flex flex-col item-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded outline'>
      <div>{p.title}</div>
      <div><p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{p.description.split(" ").slice(0,10).join(" ")+"..."}</p></div>
      <div className='h-[180px]'>
        <img src={p.image} alt={p.title} className='h-full w-full'/>
      </div>
      <div className='flex justify-between gap-12'>
      <div>
        <p className='text-green-600 gap-12 item-center w-full mt-5'>${p.price}</p>
      </div>
      {
        cart.some((item) => item.id === product_id)
          ? <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeCart}>Remove from Cart</button>
          : <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={AddCart}>Add to Cart</button>
      }
      </div>
    </div>
  );
};

export default Product;

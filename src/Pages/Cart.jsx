import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cartitem from '../Component/Cartitem'
import { useState } from 'react';
const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className='flex w-full h-full justify-items-center'>
    <div >
      {
        <div>
        {
         cart.length>0?<div>{cart.map((x,index)=>
         (<Cartitem key={x.id} x={x} index={index}/>))}</div>:(<div><h1>Cart Empty</h1>
         <NavLink to="/"> <button>Shop Now</button></NavLink>
          </div>)
        }
        </div>
      }
      </div>
      <div className='flex flex-col col-gap gap-y-10'>
      <div>
        <div className='text-green-600 font-bold'>Your Cart</div>
        <div className='font-bold text-green-600 text-2xl'>Summery</div>
        <p><span>Total Items:{cart.length}</span></p>
      </div>
      <div>
        <p>Total Amount:${totalAmount}</p>
        <button>Checkout</button>
      </div>
      </div>
    </div>
  )
}

export default Cart

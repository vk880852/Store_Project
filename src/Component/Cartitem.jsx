import React from 'react'
import {FcDeleteDatabase} from 'react-icons/Fc'
import { useDispatch } from 'react-redux';
import {remove} from '../Context/CartSlice'

const Cartitem = (props) => {
    const item=props.x;
    const index=props.x.index
    const dispatch=useDispatch();
    const removeCart=()=>
    {
       dispatch(remove(item.id));
    }
  return (
    <div className='gap-y-50 justify-content:between'>
      <div className='flex gap-x-10 gap-y-4'>
        <div>
            <img className='h-[180px] w-full'src={item.image} alt="image"/>
        </div>
        <div>
            <h1 className='font-bold'>{item.title}</h1>
            <p className='w-[200px]'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
             <div className='flex gap-12'>
                <p>${item.price}</p>
                <div onClick={removeCart}><FcDeleteDatabase/></div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem

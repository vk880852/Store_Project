import React from 'react'
import logo from '../assets/react.svg'
import {BsMinecartLoaded} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
        <nav className='flex justify-between item-center h-15 max-w-6xl mx-auto'>
          <NavLink to="/"><div className='ml-5 flex items-center'><img src={logo} className='h-14' alt="image"/><h1 className='text-2xl text-slate-100'>Store-Project</h1></div></NavLink>
          <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
           <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/cart"><div className="relative"> <BsMinecartLoaded className='text-2xl'/>{cart.length>0 && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>}</div></NavLink>
          </div>   
        </nav>
    </div>
  )
}

export default Navbar

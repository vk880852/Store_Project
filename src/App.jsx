import './App.css'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import {Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart'
function App() {
  return (
    <div >
      <div className='bg-slate-900'><Navbar/></div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App

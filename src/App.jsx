import { Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import Products from "./component/Product"
import NavbarProvider from "./component/NavbarProvider"
import Contact from "./component/Contact"
import Login from "./component/Login"
import { useEffect, useState } from "react"
import Register from "./component/Rejister"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  const [id,setUserId]=useState('')
  const [cart,setCart]=useState([])
  useEffect(()=>{
    const stringifydata=JSON.stringify(cart)
    localStorage.setItem('cart',stringifydata)
  },[cart])
  return (
      <NavbarProvider>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUserId={setUserId}/>} />
        </Routes>
      </NavbarProvider>

  )
}


export default App
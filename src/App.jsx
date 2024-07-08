import { Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import Products from "./component/Product"
import NavbarProvider from "./component/NavbarProvider"
import Contact from "./component/Contact"
import Login from "./component/Login"
import { useEffect, useState } from "react"
import Register from "./component/Rejister"
import Cart from "./component/Cart"
import Checkout from "./component/Checkout"
import OrderSummary from "./component/OrderSummary"
import ProductDetail from "./component/ProductDetails"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  const [id, setUserId] = useState('')
  const [cart, setCart] = useState([])
  
useEffect(()=>{
  if(localStorage.getItem('cart')){
    setCart(JSON.parse(localStorage.getItem('cart')))
  }
},[])
  return (
    <NavbarProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setCart={setCart}/>} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
      </Routes>
    </NavbarProvider>

  )
}


export default App
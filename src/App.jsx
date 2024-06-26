import { Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import Products from "./component/Product"
import NavbarProvider from "./component/NavbarProvider"
import Contact from "./component/Contact"
// import Login from "./component/Login"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
      <NavbarProvider>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </NavbarProvider>

  )
}


export default App
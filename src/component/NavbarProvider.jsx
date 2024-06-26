import Footer from "./Footer"
import Navbar from "./Navbar"


const NavbarProvider = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}

        <Footer />
    </div>
  )
}

export default NavbarProvider
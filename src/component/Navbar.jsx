import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";

const Navbar = () => {
    return (

        <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                {/* Logo or Brand */}
              <div className=' flex items-center'>
                 
              <FaReact className=' text-white'/>
              <Link to="/" className="text-white text-xl font-bold ml-3"> EKommReact</Link>
              </div>
         

                {/* Responsive Toggle Button */}
                <div className="block lg:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Navbar Links */}
                <div className="hidden lg:flex lg:items-center lg:w-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
                        <Link to="/" className="text-white">Home</Link>
                        <Link to="/products" className="text-white">Products</Link>
                        <Link to="/cart" className="text-white">Cart</Link>
                        <Link to="/contact" className="text-white">Contact</Link>
                    </div>

                    {/* Auth Links */}
                    <div className="flex mt-4 lg:mt-0 lg:ml-4">
                        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
                        <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
        
        // <nav className="bg-gray-800 p-4" >
        //     <div className="container mx-auto flex justify-between items-center">
        //         <Link to="/" className="text-white text-xl font-bold">EKommReact</Link>
        //         <div className="flex items-center space-x-4">
        //             <Link to="/" className="text-white">Home</Link>
        //             <Link to="/products" className="text-white">Products</Link>
        //             <Link to="/cart" className="text-white">Cart</Link>
        //             <Link to="/contact" className="text-white">Contact</Link>
        //         </div>
        //         <div>
        //             <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">Login</Link>
        //             <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">Register</Link>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navbar;

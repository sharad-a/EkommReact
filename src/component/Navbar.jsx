import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">EKomm</Link>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/products" className="text-white">Products</Link>
                    <Link to="/cart" className="text-white">Cart</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                </div>
                <div>
                    <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">Login</Link>
                    <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

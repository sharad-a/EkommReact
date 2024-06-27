// Cart.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    // const history = useHistory();
    const nav = useNavigate();

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCartItems(parsedCart);
            calculateTotalPrice(parsedCart);
        }
    }, []);

    const calculateTotalPrice = (items) => {
        const total = items.reduce((sum, item) => sum + item.prodPrice * item.quantity, 0);
        setTotalPrice(total);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item._id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
        calculateTotalPrice(updatedCart);
    };

    const navigateToCheckout = () => {
        // history.push("/checkout");
        nav('/checkout');
    };

    return (
        <div className={`container mx-auto px-4 py-8`}>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between mb-4 p-4 border rounded">
                    <div className="flex items-center">
                        <img src={item.prodImage} alt={item.prodName} className="w-16 h-16 object-cover mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">{item.prodName}</h3>
                            <p className="text-gray-700">Quantity: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="text-lg font-semibold">₹{item.prodPrice * item.quantity}/-</p>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => removeFromCart(item._id)}
                    >
                        {/* Remove */}
                        <RiDeleteBin5Line />
                    </button>
                </div>
            ))}
            <div className="flex justify-end mt-6">
                <h3 className="text-xl font-bold">Total: ₹{totalPrice}/-</h3>
            </div>
            <div className="flex justify-end mt-6">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded"
                    onClick={navigateToCheckout}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;

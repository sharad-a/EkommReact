// OrderSummary.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartItems, checkout } from '../services/CartService';

const OrderSummary = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkoutData, setCheckoutData] = useState({
        name: '',
        address: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });
    // const history = useHistory();
    const nav = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await getCartItems();
                setCartItems(response.cart);
                calculateTotals(response.cart);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const calculateTotals = (items) => {
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + (item.product.prodPrice * item.quantity), 0);
        setTotalItems(totalItems);
        setTotalPrice(totalPrice);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckoutData({
            ...checkoutData,
            [name]: value,
        });
    };

    const confirmOrder = async (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to confirm your order?')) {
            try {
                await checkout(checkoutData);
                alert('Order confirmed successfully!');
                // history.push('/home');
                nav('/home');
            } catch (error) {
                console.error('Error confirming order:', error);
                alert('Failed to confirm order. Please try again.');
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {cartItems.map(item => (
                <div key={item.product._id} className="flex items-center justify-between mb-4 p-4 border rounded">
                    <div className="flex items-center">
                        <img src={item.product.prodImage} alt={item.product.prodName} className="w-16 h-16 object-cover mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">{item.product.prodName}</h3>
                            <p className="text-gray-700">Quantity: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="text-lg font-semibold">₹{item.product.prodPrice * item.quantity}/-</p>
                </div>
            ))}
            <div className="mt-4">
                <h3 className="text-xl font-bold">Total Items: {totalItems}</h3>
                <h3 className="text-xl font-bold">Total Price: ₹{totalPrice}/-</h3>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Checkout Information</h3>
                <form onSubmit={confirmOrder}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={checkoutData.name} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address</label>
                        <input 
                            type="text" 
                            name="address" 
                            value={checkoutData.address} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Card Number</label>
                        <input 
                            type="text" 
                            name="cardNumber" 
                            value={checkoutData.cardNumber} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Expiration Date</label>
                        <input 
                            type="text" 
                            name="expirationDate" 
                            value={checkoutData.expirationDate} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">CVV</label>
                        <input 
                            type="text" 
                            name="cvv" 
                            value={checkoutData.cvv} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded mt-4">
                        Confirm Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderSummary;

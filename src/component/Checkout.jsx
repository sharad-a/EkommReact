// Checkout.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const nav=useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkoutData, setCheckoutData] = useState({
        name: '',
        address: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckoutData({
            ...checkoutData,
            [name]: value,
        });
    };

    const confirmOrder = (e) => {
        e.preventDefault();
        // Handle order confirmation logic here
        console.log('Order confirmed:', checkoutData, cartItems);
        // Clear cart and checkout data
        setCartItems([]);
        localStorage.removeItem('cart');
        setCheckoutData({
            name: '',
            address: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
        });
        alert('Your order is confirmed')
        const data=[];
        localStorage.setItem('cart',data);
        nav('/products')
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between mb-4 p-4 border rounded">
                    <div className="flex items-center">
                        <img src={item.prodImage} alt={item.prodName} className="w-16 h-16 object-cover mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">{item.prodName}</h3>
                            <p className="text-gray-700">Quantity: {item.quantity}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-end mt-6">
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
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Confirm Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;

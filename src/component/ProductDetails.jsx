// ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { IoMdCart } from "react-icons/io";



const ProductDetail = ({ cart, setCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);


    const addToCart = (product,quantity) => {

        let flag = 0;
        let product_initial = {}
        console.log(quantity)
        const updatedproduct = cart.map((u) => {
            if (u._id == product._id) {
                flag = 1
                return { ...u, quantity: u.quantity+quantity }
    
            } else {
                return u
            }
        })
        setCart(updatedproduct);
        if (!flag) {
            
            const sendProduct = { ...product, quantity }
            setCart((prev) => [...prev, sendProduct])
        }
    };
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data.product);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
       addToCart(product,quantity)
    };

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };
    
    useEffect(() => {
        if (cart.length > 0) {
            const stringifydata = JSON.stringify(cart)
            localStorage.setItem('cart', stringifydata)
        }
    }, [cart])  
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex">
                <div className="w-1/2">
                
                    <img src={product.prodImage} alt={product.prodName} className="w-full object-cover" />
                </div>
                <div className="w-1/2 pl-8">
                    <h2 className="text-2xl font-bold mb-4">{product.prodName}</h2>
                    <p className="text-gray-700 mb-4">{product.prodDesc}</p>
                    <p className="text-xl font-semibold mb-4">₹{product.prodPrice}/-</p>

                    <div className="flex items-center mb-4">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-2">Quantity:</label>
                        <div className="flex">
                            <button
                                onClick={decrementQuantity}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="border rounded px-2 py-1 w-20 text-center"
                                min="1"
                            />
                            <button
                                onClick={incrementQuantity}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    
                    {/* <div className="mb-4">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="border rounded px-2 py-1 w-20"
                            min="1"
                        />
                    </div> */}

                    <button
                        onClick={handleAddToCart}
                        // onClick={addToCart}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {/* Add to Cart */}
                        <IoMdCart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

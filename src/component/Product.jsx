// Products.jsx
import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import ProductCard from './ProductCard';

const Products = ({ setCart, cart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(); // Call the service to fetch products
                setProducts(data); // Set the fetched products to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts(); // Call the function to fetch products
    }, []); // Empty dependency array to run once on mount

    const addToCart = (product) => {

        let flag = 0;
        let product_initial = {}
        const updatedproduct = cart.map((u) => {
            if (u._id == product._id) {
                flag = 1
                return { ...u, quantity: u.quantity + 1 }

            } else {
                return u
            }
        })
        setCart(updatedproduct);
        if (!flag) {
            const quantity = 1;
            const sendProduct = { ...product, quantity }
            setCart((prev) => [...prev, sendProduct])
        }
    };
    useEffect(() => {
        if (cart.length > 0) {
            console.log(cart)
            const stringifydata = JSON.stringify(cart)
            localStorage.setItem('cart', stringifydata)
        }
    }, [cart])

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;

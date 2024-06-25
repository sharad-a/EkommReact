// Products.jsx
import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService'; // Import the service
import ProductCard from './ProductCard';

const Products = () => {
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

    const addToCart = (productId) => {
        // Implement add to cart logic here
        console.log('Add to cart:', productId);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;

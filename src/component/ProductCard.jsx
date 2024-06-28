import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import { motion } from 'framer-motion';

const ProductCard = ({ product, addToCart }) => {
    return (
        <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            <Link to={`/product/${product._id}`} className="block">
                <motion.img
                    src={product.prodImage}
                    alt={product.prodName}
                    className="w-full h-96 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="px-4 py-2">
                    <motion.h3
                        className="text-lg font-bold mb-2"
                        whileHover={{ color: "#3b82f6" }}
                        transition={{ duration: 0.3 }}
                    >
                        {product.prodName}
                    </motion.h3>

                </div>
            </Link>

            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                    <label htmlFor="price" className="text-gray-700 mr-2">Price:</label>
                    <p id="price" className="text-gray-700">₹ {product.prodPrice}/-</p>
                </div>
                <motion.button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    <IoMdCart />

                </motion.button>
            </div>


            {/* <div className=" w-[100%]    flex flex-row  justify-between items-center">
                <div className='flex'>
                    <label htmlFor="">Price :</label>
                    <p className="text-gray-700 px-2">₹ {product.prodPrice}/-</p>
                </div>
                <div className=''>
                    <motion.button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-[90px] rounded "
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoMdCart />
                    </motion.button>
                </div>
            </div> */}
        </motion.div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        prodName: PropTypes.string.isRequired,
        prodImage: PropTypes.string.isRequired,
        prodPrice: PropTypes.number.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;

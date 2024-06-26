import PropTypes from 'prop-types';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.prodImage} alt={product.prodName} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.prodName}</h3>
                <p className="text-gray-700 mb-2">₹ {product.prodPrice}/-</p>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        prodName: PropTypes.string.isRequired,
        prodImage: PropTypes.string.isRequired,
        prodPrice: PropTypes.number.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;

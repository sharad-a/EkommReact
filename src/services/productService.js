// productService.js
import axios from 'axios';

const apiUrl = 'http://localhost:5005/api/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

import axios from "axios";

const apiUrl = "http://localhost:5050/api/cart";

export const getCartItems = async (userId) => {
    const response = await axios.get(`${apiUrl}/${userId}`, {
        withCredentials: true,
    });
    return response.data;
};

export const removeFromCart = async (userId, productId, token) => {
    const response = await axios.post(
        `${apiUrl}/remove-from-cart`,
        { userId, productId },
        {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
        }
    );
    return response.data;
};

export const checkout = async (checkoutData) => {
    try {
        const response = await axios.post(`${API_URL}/checkout`, checkoutData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error during checkout:', error);
        throw error;
    }
};

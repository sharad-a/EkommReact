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

export const addToCart = (product) => {

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

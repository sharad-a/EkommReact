import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Login = ({ setUserId }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const nav = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            email: email,
            password: password,
        };

        try {
            const res = await axios.post('http://localhost:5050/api/login', obj, { withCredentials: true });

            setUserId(res.data.data[0]._id);
            console.log('(login)->localStorage-userId -->', res.data.data[0]._id);

            localStorage.setItem('userId', res.data.data[0]._id);
            // console.log('get from ls', localStorage.getItem('userId'));

            if (res.data.data[0].role === "0x88" || res.data.data[0].role === "0x01") {
                alert('User logged in successfully');
                nav('/products')
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className=" min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                        >
                            Login
                        </button>
                        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

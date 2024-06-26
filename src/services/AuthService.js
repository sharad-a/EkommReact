// AuthService.js
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class AuthService {
    async login(email, password) {
        const response = await axios.post('http://localhost:5050/api/login', { email, password }, { withCredentials: true });
        return response.data;
    }

    getToken() {
        const name = "SessionID=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    setUserIdFromToken() {
        const token = this.getToken();
        if (token) {
            const decoded = jwtDecode(token);
            console.log("decoded: ", decoded);
        }
    }
}

export default new AuthService();

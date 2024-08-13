import axios from 'axios';

export default axios.create({
    baseURL: 'https://pimg-v1-0.onrender.com',
    headers: {"ngrok-skip-browse-warning": "true"}
});
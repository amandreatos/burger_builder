import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-67469.firebaseio.com/'
});

export default instance;
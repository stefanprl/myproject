import axios from 'axios';

var request = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 4000
});

export default request;
import Axios from 'axios';

const myHttp = Axios.create({
    baseURL: 'http://localhost:4000/',
});

export default myHttp;
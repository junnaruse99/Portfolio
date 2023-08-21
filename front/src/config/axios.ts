import axios from 'axios';

const clientAxios = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'http://app.junnaruse.com/gpt/' // return prod api if running in prod
        : 'http://localhost:8000/' // return local api if running locally
});

export default clientAxios;
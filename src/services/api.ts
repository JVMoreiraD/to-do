import "dotenv/config"
import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.MY_API,
});

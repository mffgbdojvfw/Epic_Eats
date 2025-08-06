import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // if using cookies / auth tokens
});

export default API;
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mhw-db.com',
});

export default api;

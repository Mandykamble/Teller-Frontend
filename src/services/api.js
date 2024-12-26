import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (credentials) => {
  return await api.post('/auth/login', credentials);
};

export const register = async (userDetails) => {
  return await api.post('/auth/register', userDetails);
};

export const getProfile = async () => {
  return await api.get('/auth/profile');
};

export default api;

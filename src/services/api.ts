import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const projectService = {
  getAll: async () => {
    const response = await api.get('/projects');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },
  
  donate: async (projectId: string, data: any) => {
    const response = await api.post(`/projects/${projectId}/donate`, data);
    return response.data;
  }
};

export const userService = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  }
};
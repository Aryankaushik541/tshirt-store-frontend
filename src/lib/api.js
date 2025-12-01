import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const productAPI = {
  getAll: (params) => api.get('/products/', { params }),
  getBySlug: (slug) => api.get(`/products/${slug}/`),
  getFeatured: () => api.get('/products/featured/'),
  getCategories: () => api.get('/products/categories/'),
}

export const orderAPI = {
  create: (data) => api.post('/orders/', data),
  getById: (id) => api.get(`/orders/${id}/`),
  track: (orderNumber) => api.get(`/orders/${orderNumber}/track/`),
}

export default api

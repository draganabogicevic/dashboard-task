import axios from 'axios'

class ApiService {
  
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  })

  async get(path) {
    return this.http.get(path).then(response => response.data)
  }
  
  async post(path, data) {
    return this.http.post(path, data)
  }
  async put(path, payload, config) {
    return this.http.put(path, payload, config)
  }

  async delete(path, payload, config) {
    return this.http.delete(path, payload, config)
  }
}

export const API = new ApiService()
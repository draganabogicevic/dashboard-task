import { API } from './api'
import User from '../models/User'

export class UserService {
  async fetchUsers () {
    const users = await API.get('/users')
    return users.map(c => new User(c))
  }

  async submitUser (data) {
    const res = await API.post('/users', data)

    return res.status === 200
  }

  async deleteUser (id) {
    const res = await API.delete('/users/' + id)

    return res.status === 200
  }
}

export const usersService = new UserService()
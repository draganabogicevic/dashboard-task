import { API } from './api'
import User from '../models/User'

export class UserService {
  async fetchUsers () {
    const users = await API.get('/data')
    return users.map(c => new User(c))
  }
}

export const usersService = new UserService()
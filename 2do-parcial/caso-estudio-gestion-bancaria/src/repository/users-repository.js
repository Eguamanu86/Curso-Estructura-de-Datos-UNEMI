import { User } from '../entity/user.js'

export class UsersRepository {
  constructor() {
    this.users = JSON.parse(sessionStorage.getItem('users')) || []
    this.users = this.users.map(
      u => new User(u.username, u.password, u.email, u.nombres, u.status)
    )
  }

  login(username, password) {
    const user = this.users.find(u => username == u.username && password == u.password)
    return user
  }

  create(user) {
    this.users.push(user)
    sessionStorage.setItem('users', JSON.stringify(this.users))
  }

  getUsers() {
    return this.users
  }

  setCreateSession(user) {
    sessionStorage.setItem('session', JSON.stringify(user))
  }

  getSession() {
    return JSON.parse(sessionStorage.getItem('session'))
  }
}

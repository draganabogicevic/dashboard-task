export default class User {
  constructor({id, name, email, username, address}) {
    this.id = id
    this.name = name
    this.email = email
    this.username = username
    this.city = address.city
  }
}  
  
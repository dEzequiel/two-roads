const validator = require("./validator/index");

function User(username, password, email, role, createdAt) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.role = role;
  this.createdAt = createdAt;

  return {
    getUsername: () => this.username,
    getPassword: () => this.password,
    getEmail: () => this.email,
    getRole: () => this.role,
    getCreatedAt: () => this.createdAt,
  };
}

module.exports = User;

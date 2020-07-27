const login = (credentials) => {
  console.log("Login");
  console.table(credentials)
}

const signup = (credentials) => {
  console.log("Signup");
  console.table(credentials)
}

module.exports = {login, signup}
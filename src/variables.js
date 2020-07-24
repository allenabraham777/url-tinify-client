const dotenv = require('dotenv')
dotenv.config()

const backend = process.env.REACT_APP_BACKEND_URL

module.exports = {backend}
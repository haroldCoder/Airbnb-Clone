const DB_HOST = process.env.DB_HOST || 'bcck25ujhlzc0suhkna6-mysql.services.clever-cloud.com'
const DB_USER = process.env.DB_USER || 'u4kqbpolswbdw7pb'
const DB_PASSWORD = process.env.DB_PASSWORD || 'v1uVR1JaAWiFyLIjK7OJ'
const DB_NAME = process.env.DB_NAME || 'bcck25ujhlzc0suhkna6'
const DB_PORT = process.env.DB_PORT || 3306
const PORT = process.env.PORT || 4000

module.exports = {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    PORT
  }
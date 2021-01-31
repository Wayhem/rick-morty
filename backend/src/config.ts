import dotenv from 'dotenv'
dotenv.config()

export default {
  MONGO_DB: process.env.MONGO_DB || 'rick-morty-app',
  MONGO_PORT: process.env.MONGO_PORT || '27017',
  MONGO_HOSTNAME: process.env.MONGO_HOSTNAME || 'mongo',
  PORT: process.env.PORT || 8080,
  BASE_URL: process.env.BASE_URL || 'https://rickandmortyapi.com/api',
}
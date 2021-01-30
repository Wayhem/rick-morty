import dotenv from 'dotenv'
dotenv.config()

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'rick-morty-app',
  MONGO_PORT: process.env.MONGO_PORT || '27017',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  PORT: process.env.PORT || 5000,
}
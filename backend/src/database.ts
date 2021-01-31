import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config'

const { MONGO_DB, MONGO_HOSTNAME, MONGO_PORT } = config;

(async () => {
  try { 
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        autoIndex: false,
        poolSize: 10,
        bufferMaxEntries: 0
    }

    const db = await mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`, mongooseOptions)
    console.log(`database connected to ${db.connection.name}`)
  } catch (e) {
    console.log(e)
  }
})()
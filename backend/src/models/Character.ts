import { Schema, model } from 'mongoose'

// TODO: implement location and episode schema

const characterSchema = new Schema({
  id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
    url: String
  },
  location: {
    name: String,
    url: String
  },
  url: {
    type: String,
    trim: true,
  },
  created: String
}, { versionKey: false })

export default model('Character', characterSchema)

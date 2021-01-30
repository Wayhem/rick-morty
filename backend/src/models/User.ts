import { Schema, model } from 'mongoose'

var userSchema = new Schema({
  username: String,
  password: String,
  favorites: [Number]
});

export default model('User', userSchema)

import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  favoritesIds: number[];
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const userSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: true,
    min: 5,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  favoritesIds: [Number]
});

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt);
}

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password)
}

export default model<User>('User', userSchema)

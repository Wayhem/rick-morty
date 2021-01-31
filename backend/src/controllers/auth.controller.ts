import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'

export const signup = async (req: Request, res: Response) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save()
    
    const token = jwt.sign({ _id: savedUser._id }, config.SECRET_KEY)

    res.header('auth-token', token).json(savedUser)

  } catch(e) {
    res.status(400).send({
      success: false,
      error: e.message
    });
  }
}

export const signin = (req: Request, res: Response) => {
  res.send('/signin')
}

export const profile = (req: Request, res: Response) => {
  res.send('/profile')
}

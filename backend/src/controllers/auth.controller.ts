import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import User, { User as UserI } from '../models/User'
import { AUTH_TOKEN_KEY } from '../constants/authConstants'

export const signup = async (req: Request, res: Response) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save()
    
    const token = jwt.sign({ _id: savedUser._id }, config.SECRET_KEY, {
      expiresIn: 60 * 60 * 48
    })

    res.header(AUTH_TOKEN_KEY, token).json(savedUser)

  } catch(e) {
    res.status(400).send({
      success: false,
      error: e.message
    });
  }
}

export const signin = async (req: Request, res: Response) => {
  const user: UserI = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).json('Email or password incorrect')
  const isPasswordCorrect = await user.validatePassword(req.body.password)
  if (!isPasswordCorrect) return res.status(400).json('password incorrect')

  const token = jwt.sign({ _id: user._id }, config.SECRET_KEY, {
    expiresIn: 60 * 60 * 48
  })

  res.header(AUTH_TOKEN_KEY, token).json(user)
}

export const profile = async (req: Request, res: Response) => {
  const user: UserI = await User.findOne({ _id: req.userId })
  if (!user) res.status(404).json('User not found')
  res.json(user)
}

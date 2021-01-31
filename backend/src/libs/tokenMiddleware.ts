import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import { AUTH_TOKEN_KEY } from '../constants/authConstants'

interface JWTPayload {
  _id: string;
  iat: number;
  exp: number;
}

export const TokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header(AUTH_TOKEN_KEY)

  if (!token) return res.status(401).json('Access denied')

  const payload = jwt.verify(token, config.SECRET_KEY) as JWTPayload

  req.userId = payload._id

  next()
}
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import urls from './constants/urls'
import { charactersRouter, authRouter } from './routes'

const app = express()

app.set('port', process.env.PORT || 8080)

app.use(morgan('dev'))
app.use(cors({ exposedHeaders: 'auth-token' }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(authRouter)
app.use(urls.Characters, charactersRouter)

export default app

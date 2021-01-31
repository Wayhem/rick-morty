import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import urls from './constants/urls'
import { charactersRouter } from './routes'

const app = express()

app.set('port', process.env.PORT || 8080)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(urls.Characters, charactersRouter)

export default app

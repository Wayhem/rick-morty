import express from 'express'
import { charactersRouter } from './routes'

const app = express()

app.set('port', process.env.PORT || 5000)

app.use('/characters', charactersRouter)

export default app

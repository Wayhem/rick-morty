import { Router } from 'express'
import { getCharacters, getCharacter } from '../controllers/characters.controller'
import { TokenMiddleware } from '../libs/tokenMiddleware'
import urls from '../constants/urls'

const router = Router()

router.get(urls.Base, TokenMiddleware, getCharacters)

router.get(urls.Identifier, TokenMiddleware, getCharacter)

export default router

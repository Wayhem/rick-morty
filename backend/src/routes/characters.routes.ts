import { Router } from 'express'
import { getCharacters, getCharacter } from '../controllers/characters.controller'
import urls from '../constants/urls'

const router = Router()

router.get(urls.Base, getCharacters)

router.get(urls.Identifier, getCharacter)

export default router

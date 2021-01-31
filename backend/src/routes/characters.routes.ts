import { Router } from 'express'
import { getCharacters, getCharacter } from '../controllers/characters.controller'

const router = Router()

router.get('/', getCharacters)

router.get('/:id', getCharacter)

export default router

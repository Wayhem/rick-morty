import { Router } from 'express'
import { TokenMiddleware } from '../libs/tokenMiddleware'
import { signin, signup, profile, saveFavorite } from '../controllers/auth.controller'
import urls from '../constants/urls'

const router = Router()

router.post(urls.Signin, signin)
router.post(urls.Signup, signup)
router.post(urls.Favorites, TokenMiddleware, saveFavorite)
router.get(urls.Profile, TokenMiddleware, profile)

export default router

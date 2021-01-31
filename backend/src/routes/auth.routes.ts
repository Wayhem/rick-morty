import { Router } from 'express'
import { signin, signup, profile } from '../controllers/auth.controller'
import urls from '../constants/urls'

const router = Router()

router.post(urls.Signin, signin)
router.post(urls.Signup, signup)
router.get(urls.Profile, profile)

export default router

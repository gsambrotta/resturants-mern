import express from 'express'
import { postCeo } from '../controllers/ceo.js'

const { Router } = express

const router = Router()

router.post('/ceo', postCeo)

export default router

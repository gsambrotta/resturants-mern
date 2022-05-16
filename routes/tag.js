import express from 'express'
import { getTags } from '../controllers/tag.js'

const { Router } = express

const router = Router()

router.post('/tags', getTags)

export default router

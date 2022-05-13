import express from 'express'
import { getHospitals, postHospital } from '../controllers/hospital.js'

const router = express.Router()

router.get('/hospitals', getHospitals)
router.post('/hospital', postHospital)

export default router

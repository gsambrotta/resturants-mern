import express from 'express'
import getHospitals from '../controllers/hospital.js'

const router = express.Router()

router.get('/hospitals', getHospitals)

export default router

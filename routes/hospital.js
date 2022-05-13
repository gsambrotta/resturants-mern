import express from 'express'
import { getHospitals, postHospital, getHospitalById, getHospitalsByKeyword } from '../controllers/hospital.js'

const { Router } = express

const router = Router()

router.get('/hospitals', getHospitals)
router.post('/hospital', postHospital)
router.get('/hospital/:id', getHospitalById)
router.get('/hospitals/search/:keyword', getHospitalsByKeyword)

export default router

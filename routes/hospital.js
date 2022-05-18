import express from 'express'
import {
  getHospitals,
  postHospital,
  postCeo,
  getHospitalById,
  getHospitalsByKeyword,
} from '../controllers/hospital.js'

const { Router } = express

const router = Router()

router.get('/hospitals', getHospitals)
router.post('/hospital', postHospital)
router.post('/ceo', postCeo)
router.get('/hospital/:id', getHospitalById)
router.get('/hospitals/search/:keyword', getHospitalsByKeyword)

export default router

import dotenv from 'dotenv'
dotenv.config('./.env')
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import getHospitals from './routes/hospital.js'

const { PORT, MNG_DB, CORS } = process.env
const port = PORT || 5000

const app = express()

mongoose.connect(MNG_DB, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose.'))

app.use(cors({ origin: CORS }))
app.use(express.json())

app.use('/api', getHospitals)

app.listen(port, () => console.log(`server started on port ${port}`))

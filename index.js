import dotenv from 'dotenv'
dotenv.config('./.env')
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routeRestaurant from './routes/restaurant.js'
import routeComment from './routes/comment.js'
import routeCeo from './routes/ceo.js'
import routeTag from './routes/tag.js'

const { PORT, MNG_DB } = process.env
const port = PORT || 5000

const app = express()

mongoose.connect(MNG_DB, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose.'))

app.use(cors())
app.use(express.json())

app.use('/api', routeRestaurant)
app.use('/api', routeComment)
app.use('/api', routeTag)
app.use('/api', routeCeo)

app.listen(port, () => console.log(`server started on port ${port}`))

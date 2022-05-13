import mongoose from 'mongoose'
const { Schema } = mongoose

const HospitalSchema = Schema({
  name: String,
  city: String,
  description: String,
})

const Hospital = mongoose.model('Hospital', HospitalSchema)
export default Hospital

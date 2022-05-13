import mongoose from 'mongoose'
const { Schema } = mongoose

const HospitalSchema = Schema({
  name: String,
  addresse: String,
  city: String,
  description: String,
  tags: [{ name: String }],
  comments: [{ content: String }],
})

const Hospital = mongoose.model('Hospital', HospitalSchema)
export default Hospital

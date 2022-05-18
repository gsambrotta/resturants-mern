import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CeoSchema = new Schema({
  name: {
    type: String,
  },
})

const Ceo = mongoose.model('Ceo', CeoSchema)
export default Ceo

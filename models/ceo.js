import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CeoSchema = new Schema({
  name: {
    type: String,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
})

const Ceo = mongoose.model('Ceo', CeoSchema)
export default Ceo

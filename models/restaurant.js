import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 144,
    minLength: 4,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ceo: {
    type: mongoose.Types.ObjectId,
    ref: 'Ceo',
  },
  tags: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

RestaurantSchema.pre('find', function (next) {
  this.populate('tags').populate('ceo').populate('comments')
  next()
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
export default Restaurant

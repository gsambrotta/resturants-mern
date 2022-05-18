import mongoose from 'mongoose'
const { Schema } = mongoose

const TagSchema = new Schema({
  restaurants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
    },
  ],
  name: {
    type: String,
    maxLength: 25,
    minLength: 4,
  },
})

TagSchema.pre('find', function (next) {
  this.populate('restaurants')
  next()
})

const Tag = mongoose.model('Tag', TagSchema)
export default Tag

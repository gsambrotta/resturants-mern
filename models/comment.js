import mongoose from 'mongoose'
const { Schema } = mongoose

const CommentSchema = new Schema({
  content: {
    type: String,
    maxLength: 250,
    minLength: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
})

CommentSchema.pre('find', function (next) {
  this.populate('restaurant')
  next()
})

const Comment = mongoose.model('Comment', CommentSchema)
export default Comment

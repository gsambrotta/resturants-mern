import mongoose from 'mongoose'
const { Schema } = mongoose

const CommentSchema = Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  content: {
    type: String,
    maxLength: 250,
    minLength: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

CommentSchema.pre('find', function () {
  this.populate('hospital')
})

const Comment = mongoose.model('Comment', CommentSchema)
export default Comment

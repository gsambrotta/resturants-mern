import mongoose from 'mongoose'
const { Schema } = mongoose

const TagSchema = Schema({
  hospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  ],
  name: {
    type: String,
    maxLength: 25,
    minLength: 4,
  },
})

// tag = { name:'dentist', hospitals: [id: '4587138', id: '739847398'] }

// tag = { name:'dentist', hospitals: [{name: 'Waldkrakenhaus', address: 'hakfhadk'}]}

// const tagDentist = Tag.find({ id: '1'})
// before populate
// tagDentist.hospitals // [;'6134639', '31947913']

TagSchema.pre('find', function () {
  this.populate('hospital')
})

// after populate
// tagDentist.hospitals // [{name: 'dfjad', address: 'ahkfjdh'}]

const Tag = mongoose.model('Tag', TagSchema)
export default Tag

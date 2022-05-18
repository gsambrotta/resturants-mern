import mongoose from 'mongoose'
const Schema = mongoose.Schema

const HospitalSchema = new Schema({
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
  tags: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  ceo: {
    type: mongoose.Types.ObjectId,
    ref: 'Ceo',
  },
})

// HospitalSchema.pre('findOne', function (next) {
//   console.log('hello')
//   this.populate('tags')
//   next()
// })

const Hospital = mongoose.model('Hospital', HospitalSchema)
export default Hospital

// const hospitals = [
//   { name: 'Berlin Krankenhause', city: 'Berlin', tags: [{ _id: 1, _id: 2 }] },
//   { name: 'Berlin Krankenhause', city: 'Berlin', tags: [{ _id: 1, _id: 2 }] },
// ]

// const hospitals = [
//   {
//     name: 'Berlin Krankenhause',
//     city: 'Berlin',
//     tags: [{ id: 1, name: 'dentist', id: 2, name: 'physioterapist' }],
//   },
//   { name: 'Berlin Krankenhause', city: 'Berlin', tags: [{ _id: 1, _id: 2 }] },
// ]

// hospitals.tags[1].name

// const tag = hospitals.tags[1]
// tag.find()

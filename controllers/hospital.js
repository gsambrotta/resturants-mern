import Hospital from '../models/hospital.js'
import Ceo from '../models/ceo.js'

export const postCeo = async (req, res) => {
  try {
    const { name } = req.body
    const ceo = await Ceo.create({ name })
    await res.json(ceo)
  } catch (error) {
    res.status(500).send('Error posting ceo')
  }
}

export const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find({}).populate('ceo')
    console.log('lala')
    await res.json(hospitals)
  } catch (error) {
    res.status(500).send('Error getting hospitals')
  }
}

export const postHospital = async (req, res) => {
  try {
    const { name, address, city, description } = req.body
    const hospital = await Hospital.create({ name, address, city, description })
    await res.json(hospital)
  } catch (error) {
    res.status(500).send('Error posting hospital')
  }
}

export const getHospitalById = async (req, res) => {
  try {
    const { id } = req.params
    const hospital = await Hospital.findById(id)
    await res.json(hospital)
  } catch (error) {
    res.status(500).send('Error getting hospital')
  }
}

export const getHospitalsByKeyword = async (req, res) => {
  try {
    const { keyword } = req.params
    const hospitals = await Hospital.find({
      name: { $regex: keyword, $options: '$i' },
    })

    await res.json(hospitals)
  } catch (error) {
    res.status(500).send('Error getting Hospitals')
  }
}

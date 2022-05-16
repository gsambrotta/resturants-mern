import Hospital from '../models/hospital.js'

export const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find({})
    console.log({ hospitals })

    hospitals.find({ name: '' })
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

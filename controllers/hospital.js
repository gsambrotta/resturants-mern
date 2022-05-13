import Hospital from '../models/hospital.js'

export const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find({})
    await res.json(hospitals)
  } catch (error) {
    res.status(500).send('Error getting hospitals')
  }
}

export const postHospital = async (req, res) => {
  try {
    const { name, city, description } = req.body

    const hospital = await Hospital.create({ name, city, description })

    await res.json(hospital)
  } catch (error) {
    res.status(500).send('Error posting hospital')
  }
}

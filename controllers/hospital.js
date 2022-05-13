import Hospital from '../models/hospital.js'

const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find({})
    await res.json(hospitals)
  } catch (error) {
    res.status(500).send('Error getting hospitals')
  }
}
export default getHospitals

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

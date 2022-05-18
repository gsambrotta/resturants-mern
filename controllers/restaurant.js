import Restaurant from '../models/restaurant.js'

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({})
    await res.json(restaurants)
  } catch (error) {
    res.status(500).send('Error getting restaurants')
  }
}

export const postRestaurant = async (req, res) => {
  try {
    const { name, address, city, description, tags, ceo, comments } = req.body
    const restaurant = await Restaurant.create({
      name,
      address,
      city,
      description,
      tags,
      ceo,
      comments,
    })

    await res.json(restaurant)
  } catch (error) {
    res.status(500).send('Error posting restaurant')
  }
}

export const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params
    const restaurant = await Restaurant.findById(id)
    await res.json(restaurant)
  } catch (error) {
    res.status(500).send('Error getting restaurant')
  }
}

export const getRestaurantByKeyword = async (req, res) => {
  try {
    const { keyword } = req.params
    const restaurants = await Restaurant.find({
      name: { $regex: keyword, $options: '$i' },
    })

    await res.json(restaurants)
  } catch (error) {
    res.status(500).send('Error getting restaurants')
  }
}

import express from 'express'
import {
  getRestaurants,
  postRestaurant,
  getRestaurantById,
  getRestaurantByKeyword,
} from '../controllers/restaurant.js'

const { Router } = express

const router = Router()

router.get('/restaurants', getRestaurants)
router.post('/restaurant', postRestaurant)
router.get('/restaurant/:id', getRestaurantById)
router.get('/restaurants/search/:keyword', getRestaurantByKeyword)

export default router

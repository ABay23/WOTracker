const express = require('express')
const router = express.Router()

const {
  loginUser,
  registerUser,
  getUser,
} = require('../controllers/userControllers')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)

router.post('/login', loginUser)
router.get('/me', protect, getUser)

module.exports = router

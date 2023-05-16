const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//* Register New User
//* /api/users
//* public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  //* Validate
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all the fields.')
  }

  //* Find if user exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  //* Hash Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //* Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//* Login User
//* /api/users/login
//* public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  //* Find User
  const user = await User.findOne({ email })

  //* User and Password match

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

//* Get Single User
//* /api/users/me
//* Private
const getUser = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  }
  res.status(200).json(user)
})

//* Generate token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
}

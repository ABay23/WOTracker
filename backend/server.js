const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const PORT = process.env.BACKEND_PORT

//* Connect DB
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Work Order Tracker' })
})

//* Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))

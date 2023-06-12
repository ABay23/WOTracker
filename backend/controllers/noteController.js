const asyncHandler = require('express-async-handler')

const Ticket = require('../models/ticketModel')
const Note = require('../models/noteModel')

// @desc    Get user notes
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.ticketId)

  const notes = await Note.find({ ticket: req.params.ticketId })

  res.status(200).json(notes)
})

// @desc    Create new note
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
  const { text } = req.body
  const ticket = await Ticket.findById(req.params.ticketId)
  const user = req.user._id
  const note = await Note.create({
    text,
    isStaff: false,
    ticket: req.params.ticketId,
    user,
  })
})

module.exports = { getNotes, addNote }

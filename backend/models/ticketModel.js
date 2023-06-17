const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    department: {
      type: String,
      required: [true, 'Please enter the requesting department'],
    },
    category: {
      type: String,
      required: [true, 'Please select a product'],
      enum: [
        'Repairs',
        'Maintenance',
        'Assets',
        'Helpdesk',
        'Helpdesk',
        'Network',
        'Power Supply',
        'Animal Support',
        'Other',
      ],
    },

    title: {
      type: String,
      required: [true, 'Please enter the requesting department'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)

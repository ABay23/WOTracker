import React from 'react'
import { Link } from 'react-router-dom'

const TicketItem = ({ ticket }) => {
  return (
    <div>
      <div>{new Date(ticket.createdAt).toLocaleString('eng-US')}</div>
      <div>{ticket.product}</div>
      <div className={`${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket.id}`}></Link>
    </div>
  )
}

export default TicketItem

import React from 'react'

const Status = ({ ticket }) => {
  const ticketStatus = () => {
    if (ticket.status === 'new') {
      return ' bg-green-300 text-green-800 text-sm font-medium mr-2 px-2 py-0.5 rounded-full text-center'
    } else if (ticket.status === 'In Progress') {
      return 'bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'
    } else if (ticket.status === 'Closed') {
      return 'bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'
    } else {
      return 'bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'
    }
  }

  return <div className={`${ticketStatus()}`}>{ticket.status}</div>
}

export default Status

import React from 'react'

const Status = ({ ticket }) => {
  const ticketStatus = () => {
    if (ticket.status === 'new') {
      return ' bg-green-300 text-green-800 text-sm font-medium mr-2 px-2 py-0.5 rounded-full text-center'
    } else if (ticket.status === 'In Progress') {
      return 'bg-amber-500 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full text-center'
    } else if (ticket.status === 'closed') {
      return 'bg-red-500 text-red-200 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full text-center'
    } else {
      return 'bg-green-300 text-green-800 text-sm font-medium mr-2 px-2 py-0.5 rounded-full text-center'
    }
  }

  return <div className={`${ticketStatus()}`}>{ticket.status}</div>
}

export default Status

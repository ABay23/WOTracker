import React from 'react'
import { Link } from 'react-router-dom'

const TicketItem = ({ ticket }) => {
  return (
    <div className='flex flex-row align-middle bg-slate-200 rounded-l-lg rounded-r-lg py-3'>
      <div className='basis-1/2 font-bold text-center align-baseline pt-2'>
        {new Date(ticket.createdAt).toLocaleString('eng-US')}
      </div>
      <div className='basis-1/2 font-bold text-center pt-2'>
        {ticket.product}
      </div>
      <div className={`basis-1/2 font-bold text-center pt-2 ${ticket.status}`}>
        {ticket.status}
      </div>
      <button className='basis-1/2 mx-2 rounded-md bg-teal-500 text-white font-bold py-2  border-blue-100'>
        <Link to={`/ticket/${ticket.id}`}>Details</Link>
      </button>
    </div>
  )
}

export default TicketItem

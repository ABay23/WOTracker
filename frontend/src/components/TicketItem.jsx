import React from 'react'
import { Link } from 'react-router-dom'
import Status from './Status'

const TicketItem = ({ ticket }) => {
  return (
    <div className='flex flex-row align-middle bg-slate-200 rounded-l-lg rounded-r-lg py-3'>
      <div className='basis-3/3 font-bold text-center align-baseline pt-2'>
        {new Date(ticket.createdAt).toLocaleString('eng-US')}
      </div>
      <div className='basis-3/3 font-bold text-center pt-2'>
        {ticket.product}
      </div>
      <div className='basis-1.5/1.5 pt-3'>
        <Status ticket={ticket} />
      </div>
      <div className='basis-2.5/2.5 py-2 text-center'>
        <Link to={`/ticket/${ticket._id}`}>
          <button className=' w-40 py-1 rounded-md bg-teal-500 text-white font-bold  border-blue-100'>
            Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TicketItem

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets, reset } from '../components/features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import TicketItem from '../components/TicketItem'

const Tickets = () => {
  const { tickets } = useSelector((state) => state.tickets)

  const dispatch = useDispatch()

  // NOTE: only need one useEffect here

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (!tickets) {
    return <Spinner />
  }
  return (
    <div className=' flex flex-col w-screen h-screen bg-gradient-to-br from-gray-500 to-teal-900'>
      <h1 className=' my-10 pt-16 pb-12 font-mono font-bold text-5xl text-center'>
        My Tickets
      </h1>
      <div className=' px-10'>
        <div className=' flex flex-row divide-x bg-slate-600 rounded-l-lg rounded-r-lg py-4'>
          <div className=' basis-1/2 font-extrabold text-center'>Date</div>
          <div className=' basis-1/2 font-extrabold text-center'>Product</div>
          <div className=' basis-1/2 font-extrabold text-center'>Status</div>
          <div className=' basis-1/2 font-extrabold text-center'>Detail</div>
        </div>
        <div className='flex  flex-col space-y-2 pt-5'>
          {tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tickets

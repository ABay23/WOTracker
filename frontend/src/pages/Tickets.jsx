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
    <div>
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className=''>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  )
}

export default Tickets

import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getTicket } from '../components/features/tickets/ticketSlice'
import Status from '../components/Status'

const Ticket = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { ticketId } = useParams()

  const { ticket } = useSelector((state) => state.tickets)
  // console.log(ticket)

  useEffect(() => {
    dispatch(getTicket(ticketId))
    // .unwrap().catch(toast.error)
    // dispatch(getNotes(ticketId)).unwrap().catch(toast.error)
  }, [ticketId, dispatch])

  return (
    <div className='w-screen h-screen bg-gray-500'>
      <header>
        <h1> Ticket</h1>
        <h2>
          {ticket._id}
          <span>
            <Status ticket={ticket} />
            {ticket.status}
          </span>
        </h2>
        <h3>
          {' '}
          Ticket Created at:{' '}
          {new Date(ticket.createdAt).toLocaleString('en-US')}
        </h3>
        <hr />
        <div>
          <h3>Description</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  )
}

export default Ticket

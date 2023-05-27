import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getTicket } from '../components/features/tickets/ticketSlice'

const Ticket = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { ticketId } = useParams()

  const { ticket } = useSelector((state) => state.tickets)
  console.log(ticket)

  useEffect(() => {
    dispatch(getTicket(ticketId))
    // .unwrap().catch(toast.error)
    // dispatch(getNotes(ticketId)).unwrap().catch(toast.error)
  }, [ticketId, dispatch])

  return (
    <div>
      <h1> Ticket</h1>
      <h2>{ticket.product}</h2>
    </div>
  )
}

export default Ticket

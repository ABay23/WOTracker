import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeTicket,
  getTicket,
} from '../components/features/tickets/ticketSlice'
import { createNote, getNotes } from '../components/features/notes/noteSlice'
import Status from '../components/Status'
import NoteItem from '../components/NoteItem'
import Spinner from '../components/Spinner'
import { FaPlus } from 'react-icons/fa'
import Modal from 'react-modal'

const Ticket = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { ticketId } = useParams()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')

  const { ticket } = useSelector((state) => state.tickets)
  // console.log(ticket)

  const { notes } = useSelector((state) => state.notes)

  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error)
    dispatch(getNotes(ticketId)).unwrap().catch(toast.error)
  }, [ticketId, dispatch])

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
      .unwrap()
      .then(() => {
        navigate('/tickets')
        toast.success('Ticket closed!')
      })
  }

  // Open / Close Modal
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  // Submit Note
  const onNoteSubmit = (e) => {
    e.preventDefault()
    dispatch(createNote({ ticketId, noteText }))
      .unwrap()
      .then(() => {
        setNoteText('')
        closeModal()
        toast.success('Note added!')
      })
  }
  return (
    <div className='w-screen h-screen bg-gray-500'>
      <div className=' block p-40 bg-slate-400 mx-36'>
        <header>
          <h1 className=' text-xl font-bold py-6'> Ticket</h1>
          <h2 className=' font-bold pb-4 '>
            {ticket._id}
            <div className=' w-24 h-6 py-4'>
              <span className=' text-center'>
                <Status ticket={ticket} />
              </span>
            </div>
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
          <h2>Notes</h2>
        </header>
        {ticket.status !== 'closed' && (
          <button className=' inline-block' onClick={openModal}>
            <FaPlus /> Add Note
          </button>
        )}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className=' flex flex-col'>
            <h1 className=' text-xl font-bold py-6'>Add Note</h1>
            <button onClick={closeModal}>X</button>
            <form onSubmit={onNoteSubmit}>
              <div className=' flex flex-col'>
                <label htmlFor='text'>Note</label>
                <textarea
                  className=' border-2 border-gray-500 rounded-md'
                  name='text'
                  id='text'
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                ></textarea>
                <div>
                  <button
                    className=' inline-block rounded-md bg-purple-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>

        {notes ? (
          notes.map((note) => <NoteItem key={note._id} note={note} />)
        ) : (
          <Spinner />
        )}
        {ticket.status !== 'closed' && (
          <button
            className=' inline-block rounded-md bg-purple-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400'
            onClick={onTicketClose}
          >
            Close Ticket
          </button>
        )}
      </div>
    </div>
  )
}
export default Ticket

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
import { FaArrowAltCircleLeft, FaPlus } from 'react-icons/fa'
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
    <div className='w-screen h-screen py-10 bg-gradient-to-br from-gray-600 to-teal-900'>
      <div className='relative block px-40 bg-slate-400 mx-36 py-8 rounded-lg'>
        <header>
          <button
            className='absolute top-4 right-4 flex flex-row align-middle '
            onClick={() => navigate('/tickets')}
          >
            <FaArrowAltCircleLeft className='mr-2' size={20} />
            <div className='text-md'>Back</div>
          </button>
          <h1 className=' text-xl font-bold py-6'> Ticket</h1>
          <h2 className=' font-bold pb-4 '>
            {ticket._id}
            <div className=' w-24 h-6 py-4'>
              <span className=' text-center'>
                <Status ticket={ticket} />
              </span>
            </div>
          </h2>
          <h3 className='font-bold'>
            {' '}
            Ticket Created at:{' '}
            {new Date(ticket.createdAt).toLocaleString('en-US')}
          </h3>
          <hr />
          <div className='py-4'>
            <h3 className='font-bold text-lg'>Description</h3>
            <div className=' italic font-semibold text-md'>
              <p>{ticket.description}</p>
            </div>
          </div>

          <h2>Notes</h2>
        </header>
        {ticket.status !== 'closed' && (
          <button
            className='flex flex-row justify-evenly hover:text-teal-400'
            onClick={openModal}
          >
            <FaPlus
              className='m-2 text-teal-800 border-slate-600 rounded-full bg-slate-300'
              size={12}
            />{' '}
            Add Note
          </button>
        )}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className=' flex flex-col relative'>
            <h1 className=' text-xl font-bold py-6'>Add Note</h1>
            <button
              className=' absolute top-2 right-2 text-2xl text-teal-700'
              onClick={closeModal}
            >
              X
            </button>
            <form onSubmit={onNoteSubmit}>
              <div className=' flex flex-col'>
                <label htmlFor='text'>Note</label>
                <textarea
                  className=' border-2 border-gray-500 rounded-md p-2 font-sans'
                  name='text'
                  id='text'
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                ></textarea>
                <div>
                  <button
                    className=' inline-block rounded-md bg-purple-500 px-10 py-2 mt-4 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400'
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

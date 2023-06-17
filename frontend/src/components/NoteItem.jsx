import { useSelector } from 'react-redux'

const NoteItem = ({ note }) => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div
      className='flex flex-col align-middle bg-slate-200 rounded-l-lg rounded-r-lg py-3 pl-3 my-4'
      style={{ backgroundColor: note.isStaff ? '#FEEBC8' : '#CFFFE5' }}
    >
      <h4>
        {' '}
        Note From {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <br />
      <p>{note.text}</p>
      <div className=' font-mono text-xs pt-2'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
    </div>
  )
}

export default NoteItem

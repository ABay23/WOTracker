import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createTicket } from '../components/features/tickets/ticketSlice'
// import Spinner from '../components/Spinner'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [category, setCategory] = useState('Select category')
  const [department, setDepartment] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ category, department, title, description }))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/tickets')
        toast.success('New ticket created!')
      })
      .catch(toast.error)
  }

  return (
    <div className=' w-screen h-screen'>
      <section className=' bg-gradient-to-br from-gray-600 to-teal-900'>
        <div className=' py-8 px-4 mx-auto max-w-2xl lg:py-16'>
          <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
            Create New ticket
          </h2>
          <form action='#' className='' onSubmit={onSubmit}>
            <div className='flex flex-col col-span-2 gap-4 sm:grid-cols-2 sm:gap-6 my-8'>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Customer Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  // placeholder='Type product name'
                  required=''
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Customer Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  // placeholder='Type product name'
                  required=''
                />
              </div>
              <div className='w-full'>
                <label
                  htmlFor='brand'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {/* [Working on adding Vendo Code to the DB]  */}
                  Department
                </label>
                <input
                  type='text'
                  name='vcode'
                  id='vcode'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Request Department'
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                  required=''
                />
              </div>
              {/* <div className='w-full'>
                <label
                  htmlFor='price'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Price
                </label>
                <input
                  type='number'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='$200.00'
                  required=''
                  // onChange={handleImputChange}
                />
              </div> */}
              <div>
                <label
                  htmlFor='category'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Category
                </label>
                <select
                  // onChange={handleImputChange}
                  id='category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                >
                  <option defaultValue=''>Select category</option>
                  <option value='Repairs'>Repairs</option>
                  <option value='Maitenance'>Maitenance</option>
                  <option value='Assets'>Assets</option>
                  <option value='Helpdesk'>Helpdesk</option>
                  <option value='Network'>Network</option>
                  <option value='Power Supply'>Power Supply</option>
                  <option value='Animal Support'>Animal Support</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='requirement'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Requirement Title
                </label>
                <input
                  type='text'
                  name='requirement'
                  id='requirement'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Title of your requirement'
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  // value={quantity}
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='description'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Description
                </label>
                <textarea
                  type='text'
                  id='description'
                  name='description'
                  rows='8'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Your description here'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='w-50  text-white bg-violet-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              // className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
            >
              Create Ticket
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default NewTicket

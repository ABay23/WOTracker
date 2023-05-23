import React from 'react'
import { Link } from 'react-router-dom'
import { FaHammer, FaClipboardList } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <div className='flex w-screen h-screen flex-col items-center justify-center space-y-6 bg-gray-500 px-4 sm:flex-row sm:space-x-6 sm:space-y-0'>
        <div className='mr-10 w-full max-w-sm overflow-hidden rounded-lg  bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl'>
          <div className='fw-full max-w-sm overflow-hidden pl-44 p-9 text-orange-400'>
            <FaHammer size={50} />
          </div>
          <h1 className='mt-2 text-center text-2xl font-bold text-gray-500'>
            Create New Ticket
          </h1>
          <p className='my-4 text-center text-sm text-gray-500'>
            Tickets are reviewed in 24 hours.
          </p>
          <div className='space-x-4 bg-gray-100 py-4 text-center'>
            <Link to={'/new-ticket'}>
              <button className='inline-block rounded-md bg-purple-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400'>
                New Ticket
              </button>
            </Link>
          </div>
        </div>
        <div className=' w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl'>
          <div className='fw-full max-w-sm overflow-hidden pl-44 p-9 text-orange-400'>
            <FaClipboardList size={50} />
          </div>
          <h1 className='mt-2 text-center text-2xl font-bold text-gray-500'>
            My Tickets
          </h1>
          <p className='my-4 text-center text-sm text-gray-500'>
            Check the Status of your Work Orders
          </p>
          <div className='space-x-4 bg-gray-100 py-4 text-center'>
            <Link to={'/new-ticket'}>
              <button className='inline-block rounded-md bg-purple-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400'>
                New Ticket
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

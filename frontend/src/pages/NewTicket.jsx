import React from 'react'

function NewTicket() {
  const { name, price, category, quantity, description } = []

  const saveProduct = () => {}
  const handleImputChange = () => {}

  return (
    <div className=' w-screen h-screen'>
      <section className=' bg-gradient-to-br from-gray-800 to-teal-900'>
        <div className=' py-8 px-4 mx-auto max-w-2xl lg:py-16'>
          <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
            Add a new product
          </h2>
          <form action='#' className='' onSubmit={saveProduct}>
            <div className='flex flex-col col-span-2 gap-4 sm:grid-cols-2 sm:gap-6 my-8'>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Product Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  onChange={handleImputChange}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type product name'
                  required=''
                />
              </div>
              <div className='w-full'>
                <label
                  htmlFor='brand'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {/* [Working on adding Vendo Code to the DB]  */}
                  Vendor Item Code
                </label>
                <input
                  type='text'
                  name='vcode'
                  id='vcode'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Vendor Code'
                  // required=''
                />
              </div>
              <div className='w-full'>
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
                  value={price}
                  onChange={handleImputChange}
                />
              </div>
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
                  onChange={(e) => e.target.value}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                >
                  <option defaultValue=''>Select category</option>
                  <option value='iPhone'>iPhone</option>
                  <option value='iMac'>iMac</option>
                  <option value='iPad'>iPad</option>
                  <option value='MacBookPro'>MacBookPro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='item-weight'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Inventory Count
                </label>
                <input
                  type='number'
                  name='quantity'
                  id='quantity'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='12'
                  required=''
                  value={quantity}
                  onChange={handleImputChange}
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
                  onChange={(e) => e.target.value}
                  required=''
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='w-50  text-white bg-gray-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              // className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
            >
              Add Product
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default NewTicket

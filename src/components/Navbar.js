import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../slices/SearchSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row lg:justify-between mx-6 py-3'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toLocaleString()}</h3>
            <h1 className='text-2xl font-bold text-gray-600'>Food app</h1>
        </div>
        <div>
            <input  type='search' name='search' id='' placeholder='search here' autoComplete='off'
            onChange={(e)=>dispatch(setSearch(e.target.value))}
             className='p-3 border-gray-400 text-sm rounded-lg  outline-none w-full lg:w-[25vw] focus:border-gray-800'
            />
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react'

const Search = () => {
  return (
    <nav className='flex flex-row p-2 gap-4 w-full bg-purple-600 items-center'>
      <div>
        <a href="/jobs" className='font-mono text-2xl px-4 font-semibold text-white'>
          Junior.Dev
        </a>
      </div>
      <div className='w-full'>
        <input className='rounded bg-gray-100 text-2xl p-2 w-full focus:outline-none' type="text" placeholder="Search for a job or keyword" />
      </div>
    </nav>
  )
}

export default Search
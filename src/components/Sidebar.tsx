import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-56" aria-label="Sidebar">
      <div className="h-screen py-4 px-3 bg-purple-400">
          <ul className="space-y-2">
            <li>
                <div className="flex items-center p-2 font-mono font-semibold black text-xl">
                  <span className="mx-auto">Filter Postings</span>
                </div>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 font-mono font-semibold text-black rounded-lg hover:bg-gray-100">
                  <span className="flex-1 ml-3 whitespace-nowrap">Filter 1</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 font-mono font-semibold text-black rounded-lg hover:bg-gray-100">
                  <span className="flex-1 ml-3 whitespace-nowrap">Filter 2</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 font-mono font-semibold text-black rounded-lg hover:bg-gray-100">
                  <span className="flex-1 ml-3 whitespace-nowrap">Filter 3</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 font-mono font-semibold text-black rounded-lg hover:bg-gray-100">
                  <span className="flex-1 ml-3 whitespace-nowrap">Filter 4</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 font-mono font-semibold text-black rounded-lg hover:bg-gray-100">
                  <span className="flex-1 ml-3 whitespace-nowrap">Filter 5</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>
  )
}

export default Sidebar
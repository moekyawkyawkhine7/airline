import Image from 'next/image'
import React from 'react'
// lib
import { GlobeAltIcon, MenuAlt1Icon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="sticky z-50 p-5 md:p-10 grid grid-cols-3 bg-white shadow-md">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border md:shadow-sm rounded-full">
        {/* Search Box */}
        <input type="text" placeholder="Start to search" className="flex-grow bg-transparent px-5 outline-none text-sm text-gray-300 placeholder-gray-500" />
        {/* Search Icon */}
        <SearchIcon className="h-7 w-7 mx-1.5 hidden md:inline-flex cursor-pointer bg-red-300 text-white rounded-full p-1" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <h1 className="text-sm hidden md:inline">Become a host</h1>
        <GlobeAltIcon className="h-6 cursor-pointer flex-shrink-0" />
        <div className="flex space-x-2 border-2 py-2 px-2 rounded-full">
          <MenuAlt1Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header
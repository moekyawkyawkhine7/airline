import Image from 'next/image'
import React, { useState } from 'react'
// lib
import { GlobeAltIcon, MenuAlt1Icon, SearchIcon, UserCircleIcon, UserIcon } from '@heroicons/react/outline'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = ({
  placeHolder
}) => {
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  let router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection"
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetSearchField= () => {
    setSearchText("");
    setStartDate(new Date());
    setEndDate(new Date());
    setNoOfGuests(1);
  }

  const handleSearch = () => {
    router.push({
      pathname: "search",
      query: {
        location: searchText,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
    resetSearchField();
  }

  const goToHome = () => {
    router.push("/");
  }

  return (
    <header className="sticky z-50 p-5 md:p-10 grid grid-cols-3 bg-white shadow-md">
      {/* Left */}
      <div onClick={goToHome} className="relative flex items-center h-10 cursor-pointer my-auto">
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
        <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder={placeHolder || "Start to search"} className="flex-grow bg-transparent px-5 outline-none text-sm placeholder-gray-300" />
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
      {/* Date Range Picker */}
      {searchText?.trim() && (
        <div className="mt-5 absolute flex w-full justify-center top-[70px] transition duration-200 ease-in-out">
          <div className="bg-white flex px-3 py-3 border rounded-md shadow-md flex-col">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              rangeColors={["#FD5B61"]}
            />
            <div className="flex items-center border-b pb-3">
              <h1 className="text-lg font-semibold flex flex-grow">Number of Guests</h1>
              <div className="flex items-center">
                <UserIcon className="h-6 w-6" />
                <input type="number" value={noOfGuests} onChange={e => setNoOfGuests(e.target.value)} min={1} defaultValue={1} className="outline-none text-red-500 pl-2 w-12" />
              </div>
            </div>
            <div className="flex justify-around pt-3">
              <button onClick={resetSearchField} className="text-sm font-medium">Cancel</button>
              <button onClick={handleSearch} className="text-sm font-medium text-red-500">Search</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
import { HeartIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

const InfoCard = ({
    img,
    rate,
    description,
    price,
    destination,
    noOfGuests
}) => {
    return (
        <div className="flex gap-3 first:border-t-2 py-3 cursor-pointer transition transform duration-200 ease-out hover:px-5 hover:py-5 hover:rounded-md hover:scale-90 hover:shadow-md hover:bg-gray-50">
            <div className="relative h-auto w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <div className='flex flex-col flex-grow'>
                <div className="flex-grow">
                    <div className="flex items-center justify-between">
                        <h1 className="text-sm text-gray-700">Private room</h1>
                        <HeartIcon className='h-7 cursor-pointer' />
                    </div>
                    <h1 className='text-md font-semibold'>Stay at Hotel, {destination}</h1>
                    <p className='text-xs flex-grow text-gray-500'>
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <StarIcon className='h-3 text-yellow-500' />
                        <span className='text-sm text-gray-700'>{rate}</span>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-md font-semibold'>${price}/night</p>
                        <p className='text-xs text-gray-500'>${price * noOfGuests} total</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
import Image from 'next/image'
import React from 'react'

const SmallCard = ({ img, location, distance }) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 cursor-pointer transition transform duration-200 ease-out">
            {/* left  */}
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Right */}
            <div>
                <h2 className="text-sm font-semibold">{distance}</h2>
                <h3 className="text-sm text-gray-500">{location}</h3>
            </div>
        </div>
    )
}

export default SmallCard
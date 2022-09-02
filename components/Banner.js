import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"> 
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute space-y-1 top-1/2 w-full text-2xl font-semibold text-center">
                <h1>Not sure where to go? Perfect</h1>
                <button className="py-2 px-3 text-purple-500 shadow-sm hover:shadow-lg active:text-red-100 active:scale-90 transition duration-150 text-sm font-medium bg-white rounded-full">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
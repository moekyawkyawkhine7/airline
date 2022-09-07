import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
                src="https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/3a682176-c8e2-4612-88d1-f441e01b0346.jpeg"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute space-y-1 top-1/2 w-full flex justify-center text-2xl font-semibold text-center">
                <div className="px-3 py-7 hover:shadow-md hover:scale-150 hover:rotate-12 transform transition duration-200 ease-out rounded-md bg-red-50 w-96">
                    <h1 className="uppercase pb-2">Not sure where to go? Perfect</h1>
                    <button className="py-2 px-3 uppercase text-purple-500 shadow-sm hover:shadow-lg active:text-red-100 active:scale-90 transition duration-150 text-sm font-medium bg-white rounded-full">I'm flexible</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
import Image from 'next/image'
import React from 'react'

const MediumCard = ({ img, title}) => {
  return (
    <div>
        <div className='relative h-80 w-80 hover:scale-105 transition transform duration-200 ease-out cursor-pointer'>
            <Image
                src={img}
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
            />
        </div>
        <h3 className="font-semibold text-xl pt-2">{title}</h3>
    </div>
  )
}

export default MediumCard
import Image from 'next/image'
import React from 'react'

const LargeCard = ({
    img,
    title,
    description,
    buttonText
}) => {
  return (
    <section className='relative cursor-pointer py-16'>
        <div className='relative h-96 min-w-[300px]'>
            <Image 
                src={img}
                layout="fill"
                objectFit="cover"
                className='rounded-xl'
            />
        </div>
        <div className="absolute top-32 left-12">
            <h3 className='text-4xl font-semibold mb-3 w-64'>{title}</h3>
            <p className='text-lg font-normal'>{description}</p>
            <button className='bg-gray-900 text-sm hover:scale-90 transition duration-200 text-white rounded-xl p-2 mt-3'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard
import Image from 'next/image'
import React from 'react'
// lib
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <div className='relative'>
            <Carousel showThumbs={false}>
                <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
                    <Image
                        src="https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=1200"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
                    <Image
                        src="https://a0.muscache.com/im/pictures/e01b92be-2b1d-4a2a-8b93-0a5a92e309e9.jpg?im_w=1200"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
                    <Image
                        src="https://a0.muscache.com/im/pictures/16f4c777-2587-4008-b755-86747c59b5e7.jpg?im_w=1200"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </Carousel>
            <div className='absolute flex top-16 md:top-36 md:justify-center w-full'>
                <div className="w-52 md:-mt-16 ml-7 py-3 lg:mr-4 px-5 uppercase">
                    <h1 className='text-lg font-bold text-white shadow-sm'>Travel Your</h1>
                    <div className='text-white shadow-xl font-bold text-5xl w-20'>Dream <div className="animate-bounce">Place</div></div>
                </div>
                <div className='hidden sm:flex flex-wrap gap-5'>
                    <div className='relative -mt-20 flex-shrink-0 h-40 w-40 hover:scale-105 rounded-xl border-2 transition transform duration-200 ease-out cursor-pointer'>
                        <Image
                            src="https://a0.muscache.com/im/pictures/6481d1e8-a4d9-4f24-99e7-efccefb9132d.jpg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    </div>
                    <div className='relative -mt-1.5 flex-shrink-0 h-40 w-40 hover:scale-105 rounded-xl border-2 transition transform duration-200 ease-out cursor-pointer'>
                        <Image
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-52439121/original/f8be2629-895f-4a3c-9e99-e63852b68a30.jpeg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    </div>
                    <div className='relative mt-14 flex-shrink-0 h-40 w-40 hover:scale-105 rounded-xl border-2 transition transform duration-200 ease-out cursor-pointer'>
                        <Image
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-43316780/original/e5f00c7b-ed64-4d88-b386-631ca1d42b92.jpeg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    </div>
                    <div className='relative hidden lg:flex mt-32 flex-shrink-0 h-40 w-40 hover:scale-105 rounded-xl border-2 transition transform duration-200 ease-out cursor-pointer'>
                        <Image
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-43316780/original/e5f00c7b-ed64-4d88-b386-631ca1d42b92.jpeg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
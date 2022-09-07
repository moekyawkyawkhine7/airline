import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import InfoCard from '../components/InfoCard'

const search = () => {
    let router = useRouter();
    let {
        location,
        startDate,
        endDate,
        noOfGuests
    } = router?.query;

    const formatedStartDate = startDate ? format(new Date(startDate), "dd MMMM yy") : "";
    const formatedEndDate = endDate ? format(new Date(endDate), "dd MMMM yy") : "";
    let range= `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <>
            <Head>
                <title>AirBnb - Search Page</title>
            </Head>
            <Header
              placeHolder={`${location || ""} | ${range} | ${noOfGuests || ""}`}
            />
            <main>
                <section className="flex-grow space-y-3 pt-14 px-6">
                    <p className="text-sm">
                        300+ Stays - {range} - for {noOfGuests}
                    </p>
                    <h1 className="text-3xl font-semibold">
                        Stays in {location}
                    </h1>
                    <div className='hidden md:inline-flex space-x-3'>
                        <h1 className='button'>Cancellation Flexibility</h1>
                        <h1 className='button'>Types of Place</h1>
                        <h1 className='button'>Price</h1>
                        <h1 className='button'>Rooms and Beds</h1>
                        <h1 className='button'>More Filter</h1>
                    </div>
               
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default search
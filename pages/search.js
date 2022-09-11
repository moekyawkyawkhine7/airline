import Head from 'next/head'
import React from 'react'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { Header, Footer, InfoCard, Map } from "../components";

const search = ({ searchData }) => {
    let router = useRouter();
    let {
        location,
        startDate,
        endDate,
        noOfGuests
    } = router?.query;

    const formatedStartDate = startDate ? format(new Date(startDate), "dd MMMM yy") : "";
    const formatedEndDate = endDate ? format(new Date(endDate), "dd MMMM yy") : "";
    let range = `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <>
            <Head>
                <title>AirBnb - Search Page</title>
            </Head>
            <Header
                placeHolder={`${location || ""} | ${range} | ${noOfGuests || ""}`}
            />
            <main className="pb-14 flex">
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

                    {searchData.map(({ img, destination, rate, description, price }) => (
                        <InfoCard key={img} noOfGuests={noOfGuests} destination={destination} img={img} rate={rate} description={description} price={price} />
                    ))}
                </section>
                <div className='hidden md:inline-flex w-1/3 h-[700px]'>
                    <Map
                        searchData={searchData}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default search

export async function getServerSideProps(context) {
    let {
        location,
        startDate,
        endDate,
        noOfGuests
    } = context.query;
    let searchData = await fetch(`http://localhost:3000/api/locations?location=${location}&startDate=${startDate}&endDate=${endDate}&noOfGuests=${noOfGuests}`).then(res => res.json())
    return {
        props: {
            searchData
        }
    }
}
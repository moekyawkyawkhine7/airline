import Head from 'next/head'
// comp
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

const Home = ({
  exploreData,
  placesData
}) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* https://links.papareact.com/pyp */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* explore nearby */}
        <section className="pt-6">
          <h2 className="font-semibold text-4xl pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData?.map(({ img, location, distance }) => (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              ))
            }
          </div>
        </section>
        {/* live everywhere */}
        <section className="pt-6">
          <h2 className="font-semibold text-4xl pb-5">Live Everywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide pt-3 px-3 -ml-3">
            {
              placesData?.map(({ img, title }) => (
                <MediumCard
                  key={img}
                  img={img}
                  title={title}
                />
              ))
            }
          </div>
        </section>
        {/* large card */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  let exploreData = await fetch("https://links.papareact.com/pyp").then(res => res.json());
  let placesData = await fetch("https://links.papareact.com/zp1").then(res => res.json())
  return {
    props: {
      exploreData,
      placesData
    }
  }
}

import Head from 'next/head'
// comp
import { Banner, Footer, Header, LargeCard, MediumCard, SmallCard } from "../components";

const Home = ({
  exploreData,
  placesData
}) => {
  return (
    <>
      <Head>
        <title>AirBnb</title>
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
    </>
  )
}

export default Home

export async function getStaticProps() {
  let exploreData = await fetch("http://localhost:3000/api/explore").then(res => res.json());
  let placesData = await fetch("http://localhost:3000/api/places").then(res => res.json())
  return {
    props: {
      exploreData,
      placesData
    }
  }
}

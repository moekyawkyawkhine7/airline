import React from 'react'

const Footer = () => {
    return (
        <footer className="grid sm:grid-cols-4 gap-y-5 text-sm font-normal text-gray-500 px-14 py-7 bg-gray-100">
            <div className='space-y-3'>
                <h3 className="text-lg font-semibold text-gray-900">Support</h3>
                <p>Help Centre</p>
                <p>AirCover</p>
                <p>Safety information</p>
                <p>Supporting people with disabilities</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Report a neighbourhood concern</p>
            </div>
            <div className='space-y-3'>
                <h3 className="text-lg font-semibold text-gray-900">Community</h3>
                <p> Airbnb.org: disaster relief housing</p>
                <p>Support Afghan refugees</p>
                <p>Combating discrimination</p>
            </div>
            <div className='space-y-3'>
                <h3 className="text-lg font-semibold text-gray-900">Hosting</h3>
                <p>Try hosting</p>
                <p>AirCover for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>
            <div className='space-y-3'>
                <h3 className="text-lg font-semibold text-gray-900">Airbnb</h3>
                <p>Learn about new featuers</p>
                <p>Newsroom</p>
                <p>Learn from our founders</p>
                <p>Customers</p>
                <p>Investors</p>
            </div>
        </footer>
    )
}

export default Footer
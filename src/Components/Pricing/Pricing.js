import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from './Header'
import Offers from './Offers'
import Footer from '../Footer/Footer'
import './Pricing.css'

const Pricing = () => {
    return (
        <section className="pricing">
            <div className="top full-background">
                <Navbar />
                <Header />
            </div>
            <Offers />
            <Footer />
        </section>
    );
};

export default Pricing;
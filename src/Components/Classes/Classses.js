import React from 'react'
import Header from './Header'
import Navbar from '../Navbar/Navbar'
import './Classes.css'
import Schedule from './Schedule'
import Footer from '../Footer/Footer'

const Classses = () => {
    return (
        <section className="classes">
            <div className="top full-background">
                <Navbar />
                <Header />
            </div>
            <Schedule />
            <Footer />
        </section>
    );
};

export default Classses;
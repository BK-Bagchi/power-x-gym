import React from 'react'
import Header from './Header'
import Navbar from '../Navbar/Navbar'
import './Classes.css'
import Schedule from './Schedule'
import Footer from '../Footer/Footer'
import ClassOption from './ClassOption'

const Classses = () => {
    return (
        <section className="classes">
            <div className="top full-background">
                <Navbar />
                <Header />
            </div>
            <ClassOption />
            {/* <Schedule /> */}
            <Footer />
        </section>
    );
};

export default Classses;
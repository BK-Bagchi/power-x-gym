import React from 'react'
import Header from './Header'
import Navbar from '../Navbar/Navbar'
import './Classes.css'

const Classses = () => {
    return (
        <section className="classes">
            <div className="top full-background">
                <Navbar />
                <Header />
            </div>
        </section>
    );
};

export default Classses;
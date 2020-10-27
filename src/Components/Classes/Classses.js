import React, { useState } from 'react'
import Header from './Header'
import Navbar from '../Navbar/Navbar'
import './Classes.css'
import Schedule from './Schedule'
import Footer from '../Footer/Footer'
import ClassOption from './ClassOption'

const Classses = () => {
    const [className, setClassName] = useState('')

    return (
        <section className="classes">
            <div className="top full-background">
                <Navbar />
                <Header title={className} />
            </div>
            { !className ? <ClassOption setClassName={setClassName} /> : <Schedule />}
            <Footer />
        </section>
    );
};

export default Classses;
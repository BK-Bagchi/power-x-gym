import React from 'react';
import Navbar from '../Navbar/Navbar';
import Aboutus from './Aboutus';
import Cards from './Cards';
import Header from './Header';
import Trainings from './Trainings';

const Home = () => {
    return (
        <section className="home">
            <div className="top full-background">
                <Navbar />
                <Header />
            </div>
            <Cards />
            <Aboutus />
            <Trainings />
        </section>
    );
};

export default Home;
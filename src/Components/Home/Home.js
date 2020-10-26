import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from './Header';

const Home = () => {
    return (
        <section className="home">
            <div className="top full-background">
                <Navbar />
                <Header />
            </div>
        </section>
    );
};

export default Home;
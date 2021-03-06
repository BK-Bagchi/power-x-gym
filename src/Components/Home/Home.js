import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Aboutus from './Aboutus'
import Cards from './Cards'
import Header from './Header'
import Trainings from './Trainings'
import WhyChooseUs from './WhyChooseUs'

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
            <WhyChooseUs />
            <Footer />
        </section>
    );
};

export default Home;
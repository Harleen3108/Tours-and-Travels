import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import About from '../components/About';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Services />
            <Destinations />
        </div>
    );
};

export default Home;

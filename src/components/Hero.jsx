import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" alt="Mountain Landscape" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <span className="hero-subtitle">FIND EXCITEMENT WHEREVER YOU GO</span>
                    <h1 className="hero-title">Explore the World <br /> With Confidence</h1>
                    <div className="hero-btns" style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <Link to="/services" className="btn-primary">Explore Services</Link>
                        <Link to="/contact" className="btn-secondary" style={{ border: '2px solid white', color: 'white' }}>Contact Us</Link>
                    </div>
                </motion.div>
            </div>
            
            <div className="torn-edge top"></div>
        </section>
    );
};

export default Hero;

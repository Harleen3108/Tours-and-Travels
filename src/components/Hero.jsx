import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <img 
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
                    alt="Mountain Landscape" 
                />
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
                    
                    <div className="hero-btns">
                        <Link to="/services" className="btn-primary">Explore Services</Link>
                        <Link to="/contact" className="btn-secondary">Contact Us</Link>
                    </div>

                    {/* Fixed Butterfly Loop Section */}
                    <div className="butterfly-wrapper">
                        <motion.div 
                            className="butterfly-text"
                            animate={{ x: ["0%", "-50%"] }} // Both are now strings!
                            transition={{ 
                                repeat: Infinity, 
                                duration: 25, 
                                ease: "linear" 
                            }}
                        >
                            <span>Tour and Travels — Air Ticketing — Visa Services — Import Export — &nbsp;</span>
                            <span>Tour and Travels — Air Ticketing — Visa Services — Import Export — &nbsp;</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            <div className="torn-edge top"></div>
        </section>
    );
};

export default Hero;
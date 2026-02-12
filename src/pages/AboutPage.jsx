import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page-new">
            {/* Cinematic Hero with Torn Edge */}
            <div className="hero-section-cinematic">
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" alt="Modern Office" />
                    <div className="cinematic-overlay"></div>
                </div>
                <div className="container">
                    <motion.div 
                        className="hero-content-styled"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="hero-pill">ABOUT OUR LEGACY</span>
                        <h1 className="hero-display-title">Crafting Unforgettable <br />Journeys Since 2012</h1>
                    </motion.div>
                </div>
                <div className="torn-edge"></div>
            </div>

            <div className="container">
                {/* Narrative Story Section */}
                <div className="narrative-section">
                    <div className="narrative-grid">
                        <motion.div 
                            className="narrative-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="accent-label">OUR STORY</span>
                            <h2 className="section-serif-title">A Decade of Excellence in Global Travel</h2>
                            <p className="lead-text">At Tour and Travels, we don't just book trips; we curate experiences that last a lifetime.</p>
                            <p className="description-text">Founded on principles of transparency and passion, we've grown from a boutique agency into a premier destination for global migration and travel. Our team of 50+ experts works tirelessly to ensure your dreams across borders become reality.</p>
                            
                            <div className="experience-badge">
                                <span className="years">12+</span>
                                <span className="text">Years of <br />Excellence</span>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="narrative-visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="image-frame-luxury">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Team" className="main-image" />
                                <div className="floating-award-card">
                                    <Award size={32} className="award-icon" />
                                    <div>
                                        <h5>Award Winning</h5>
                                        <p>Best Agency 2023</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="values-grid">
                    <motion.div 
                        className="value-card-luxury"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="value-icon-box"><Target size={32} /></div>
                        <h3>Our Mission</h3>
                        <p>To simplify global travel and migration through expertise, transparency, and a relentless dedication to client success.</p>
                        <ul className="luxury-list">
                            <li><CheckCircle size={16} /> Transparent Pricing</li>
                            <li><CheckCircle size={16} /> Personalized Care</li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        className="value-card-luxury"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="value-icon-box"><Eye size={32} /></div>
                        <h3>Our Vision</h3>
                        <p>To become the world's most trusted partner for seamless international journeys, empowering global citizens everywhere.</p>
                        <ul className="luxury-list">
                            <li><CheckCircle size={16} /> Global Network</li>
                            <li><CheckCircle size={16} /> Innovation Driven</li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Impact Band */}
            <div className="impact-stats-band">
                <div className="container">
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h2 className="impact-number">10K+</h2>
                            <p className="impact-label">Happy Travelers</p>
                        </div>
                        <div className="impact-item">
                            <h2 className="impact-number">98%</h2>
                            <p className="impact-label">Success Rate</p>
                        </div>
                        <div className="impact-item">
                            <h2 className="impact-number">50+</h2>
                            <p className="impact-label">Destinations</p>
                        </div>
                        <div className="impact-item">
                            <h2 className="impact-number">24/7</h2>
                            <p className="impact-label">Expert Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

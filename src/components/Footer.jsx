import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer-new">
            <div className="container">
                <div className="footer-adventure">
                    <motion.h1 
                        className="big-adventure"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >Adventure</motion.h1>
                </div>

                <div className="footer-main-content">
                    <div className="footer-brand">
                        <img src={logo} alt="Tour and Travels Logo" className="footer-logo" />
                        <p>Providing exceptional domestic and international travel experiences with professional visa and ticketing support.</p>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/services">Tours & Travels</Link></li>
                                <li><Link to="/services">Visa Services</Link></li>
                                <li><Link to="/services">Air Ticketing</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Support</h4>
                            <ul>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <p>Email: info@toursandtravels.com</p>
                            <p>Phone: +91 7743040191</p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>&copy; 2026 Tour and Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

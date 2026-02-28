import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo2.png';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Tour and Travels Logo" />
                    <div className="brand-text">
                        <span className="brand-name">Tour and Travels </span>
                        <span className="brand-tagline">Domestic and International</span>
                    </div>
                </Link>
                <nav className={`nav-links ${isActive ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsActive(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsActive(false)}>About Us</Link>
                    <Link to="/services" onClick={() => setIsActive(false)}>Services</Link>
                    <Link to="/countries" onClick={() => setIsActive(false)}>Countries</Link>
                    <Link to="/contact" className="btn-primary" onClick={() => setIsActive(false)}>Contact Us</Link>
                </nav>
                <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

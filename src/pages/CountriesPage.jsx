import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plane, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import './CountriesPage.css';

const countries = [
    {
        name: 'Canada',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1200',
        desc: 'Escape to the breathtaking wilderness of the Great White North. Canada offers unparalleled opportunities for students and precision professionals seeking high living standards.',
        visaTypes: ['Study Permit', 'Work Permit', 'Connect PR', 'Tourist Visa'],
        stat: '98% Success Rate',
        motto: 'THE LAND OF OPPORTUNITY'
    },
    {
        name: 'Australia',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200',
        desc: 'Experience world-class education and a thriving job market in the Land Down Under. Known for its unique wildlife and cosmopolitan lifestyle.',
        visaTypes: ['Skilled Independent', 'Student Visa', 'Working Holiday', 'Business'],
        stat: 'Fast Processing',
        motto: 'THE SUNSHINE NATION'
    },
    {
        name: 'New Zealand',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
        desc: 'The adventure capital of the world awaits. New Zealand offers a peaceful environment with high living standards, ideal for families and explorers.',
        visaTypes: ['Essential Skills', 'Study to PR', 'Investor Visa', 'Seasonal'],
        stat: 'Quality of Life',
        motto: 'PURE ADVENTURE'
    },
    {
        name: 'Europe (Schengen)',
        image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=1200',
        desc: 'Unlock the rich history and limitless travel of the Schengen area. Expert assistance for major European nations including Germany and France.',
        visaTypes: ['National Visa', 'Schengen Business', 'Job Search', 'EU Blue Card'],
        stat: 'Global Mobility',
        motto: 'CULTURAL HERITAGE'
    }
];

const CountriesPage = () => {
    const navigate = useNavigate();
    return (
        <div className="countries-page-new">
            {/* Cinematic Hero Section */}
            <div className="hero-section-cinematic">
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2070" alt="World Map" />
                    <div className="cinematic-overlay"></div>
                </div>
                <div className="container">
                    <motion.div 
                        className="hero-content-styled"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="hero-pill">GLOBAL DESTINATIONS</span>
                        <h1 className="hero-display-title">Your Gateway to <br />the Whole World</h1>
                    </motion.div>
                </div>
                <div className="torn-edge"></div>
            </div>

            <div className="container">
                <div className="destinations-luxury-list">
                    {countries.map((country, idx) => (
                        <motion.div 
                            key={idx}
                            className="luxury-country-row"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="luxury-country-image">
                                <img src={country.image} alt={country.name} />
                                <div className="image-luxury-overlay"></div>
                                <div className="image-luxury-tag">
                                    <MapPin size={18} /> {country.motto}
                                </div>
                            </div>
                            
                            <div className="luxury-country-content">
                                <div className="country-luxury-header">
                                    <h2 className="country-serif-title">{country.name}</h2>
                                    <span className="country-stat-badge">{country.stat}</span>
                                </div>
                                <p className="country-luxury-desc">{country.desc}</p>
                                
                                <div className="luxury-visa-box">
                                    <h5>Available Pathways:</h5>
                                    <div className="luxury-visa-pills">
                                        {country.visaTypes.map((type, i) => (
                                            <span key={i} className="luxury-pill-item">
                                                <CheckCircle2 size={16} /> {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <motion.button 
                                    className="luxury-apply-btn"
                                    whileHover={{ x: 15 }}
                                    onClick={() => navigate('/contact')}
                                >
                                    Start Evaluation <ArrowUpRight size={22} className="ml-2" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountriesPage;

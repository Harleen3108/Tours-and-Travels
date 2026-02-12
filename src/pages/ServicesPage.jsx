import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Zap, Heart } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServicesPage.css';

const ServicesPage = () => {
    const navigate = useNavigate();
    return (
        <div className="services-page-new">
            {/* Cinematic Hero Section */}
            <div className="hero-section-cinematic">
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" alt="Services" />
                    <div className="cinematic-overlay"></div>
                </div>
                <div className="container">
                    <motion.div 
                        className="hero-content-styled"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="hero-pill">PREMIUM SOLUTIONS</span>
                        <h1 className="hero-display-title">World-Class Services <br />For Global Explorers</h1>
                    </motion.div>
                </div>
                <div className="torn-edge"></div>
            </div>

            <div className="container">
                {/* Services Grid - Same services as home carousel, with more details */}
                <div className="services-luxury-grid">
                    {servicesData.map((service, idx) => (
                        <motion.div 
                            key={service.id}
                            className="luxury-service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            {/* Card Image */}
                            <div className="luxury-card-image-wrap">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="luxury-card-image"
                                    loading="lazy"
                                />
                            </div>

                            <div className="luxury-card-content">
                                <div className="card-luxury-top">
                                    <h3 className="card-luxury-title">{service.title}</h3>
                                    <span className="card-luxury-number">0{idx + 1}</span>
                                </div>
                                <p className="card-luxury-desc">{service.fullDescription}</p>
                                <ul className="card-luxury-features">
                                    {service.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Excellence Track */}
                <div className="excellence-track">
                    <div className="excellence-header text-center">
                        <span className="accent-label">WHY TRUST US</span>
                        <h2 className="section-serif-title">Committed to Your <br />Peace of Mind</h2>
                    </div>
                    <div className="excellence-grid">
                        <div className="excellence-item">
                            <ShieldCheck size={48} className="excellent-icon" />
                            <h4>Secure Handling</h4>
                            <p>Military-grade encryption for all your sensitive documents and data.</p>
                        </div>
                        <div className="excellence-item">
                            <Zap size={48} className="excellent-icon" />
                            <h4>Swift Execution</h4>
                            <p>Optimized process flow to ensure the fastest turnaround times in the industry.</p>
                        </div>
                        <div className="excellence-item">
                            <Heart size={48} className="excellent-icon" />
                            <h4>Personalized Care</h4>
                            <p>Every client is unique; we tailor our solutions to your specific life journey.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: 'center', padding: '0 0 80px' }}>
                <motion.button 
                    className="cta-btn-premium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    style={{
                        padding: '1.2rem 3rem',
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        boxShadow: '0 15px 35px rgba(30, 77, 99, 0.2)'
                    }}
                >
                    Start Your Journey Today
                </motion.button>
            </div>

        </div>
    );
};

export default ServicesPage;

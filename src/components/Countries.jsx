import React from 'react';
import { motion } from 'framer-motion';
import './Countries.css';

const countriesData = [
    { emoji: '🇨🇦', name: 'Canada' },
    { emoji: '🇳🇿', name: 'New Zealand' },
    { emoji: '🇦🇺', name: 'Australia' },
    { emoji: '🇪🇺', name: 'Europe' }
];

const Countries = () => {
    return (
        <section id="countries" className="countries">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >Global Coverage</motion.h2>
                    <p>We specialize in these top destinations and all European countries.</p>
                </div>
                <div className="countries-grid">
                    {countriesData.map((country, index) => (
                        <motion.div 
                            className="country-item" 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span>{country.emoji}</span>
                            <h4>{country.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countries;

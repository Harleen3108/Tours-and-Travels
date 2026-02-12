import React from 'react';
import { motion } from 'framer-motion';
import './Destinations.css';

const destinationData = [
    {
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
        title: 'Santorini, Greece',
        tag: 'ROMANTIC'
    },
    {
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
        title: 'Taj Mahal, India',
        tag: 'HISTORIC'
    },
    {
        image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?auto=format&fit=crop&q=80&w=800',
        title: 'Bora Bora',
        tag: 'BEACH'
    },
    {
        image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=800',
        title: 'New York, USA',
        tag: 'CITY'
    }
];

const Destinations = () => {
    return (
        <section id="services" className="destinations-section">
            <div className="container">
                <div className="section-header">
                    <span className="label">CHOOSE YOUR EXPERIENCE</span>
                    <h2 className="title">Top attraction destinations</h2>
                    <p className="subtitle">Explore the world's most breathtaking destinations handpicked by our travel experts for an unforgettable experience.</p>
                </div>

                <div className="destinations-grid">
                    {destinationData.map((item, index) => (
                        <motion.div 
                            className="dest-card" 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="dest-image">
                                <img src={item.image} alt={item.title} />
                                <div className="dest-tag">{item.tag}</div>
                            </div>
                            <div className="dest-info">
                                <h3>{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;

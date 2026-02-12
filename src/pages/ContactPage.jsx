import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import './ContactPage.css';

const WHATSAPP_NUMBER = '917743040191';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Build WhatsApp message
        const text = [
            `*New Enquiry from Website*`,
            ``,
            `*Name:* ${formData.name}`,
            `*Email:* ${formData.email}`,
            formData.phone ? `*Phone:* ${formData.phone}` : '',
            formData.interest ? `*Interested In:* ${formData.interest}` : '',
            `*Message:* ${formData.message}`
        ].filter(Boolean).join('\n');

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="contact-page-new">
            {/* Header Section */}
            <div className="contact-hero">
                <div className="contact-hero-bg">
                    <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2074" alt="Contact Us" />
                    <div className="overlay"></div>
                </div>
                <div className="container">
                    <motion.div 
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="display-title">Let's start your <br />journey together</h1>
                    </motion.div>
                </div>
            </div>

            <div className="container">
                <div className="contact-layout">
                    {/* Left: Info Grid */}
                    <div className="info-section">
                        <div className="section-header">
                            <h2 className="serif-title">Contact Information</h2>
                            <p>Our team is here to provide you with personalized support for all your travel and visa needs.</p>
                        </div>

                        <div className="info-cards">
                            <motion.div 
                                className="info-card" 
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-icon"><MapPin size={24} /></div>
                                <div>
                                    <h4>Visit Our Office</h4>
                                    <p>123 Travel Street, Suite 500,<br />City Name, State - 123456</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="info-card" 
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="card-icon"><Phone size={24} /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 7743040191</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="info-card" 
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="card-icon"><Mail size={24} /></div>
                                <div>
                                    <h4>Email Support</h4>
                                    <p>info@toursandtravels.com</p>
                                    <p>visa@toursandtravels.com</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="info-card" 
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="card-icon"><Clock size={24} /></div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Mon - Fri: 09:00 AM - 06:00 PM</p>
                                    <p>Sat: 10:00 AM - 02:00 PM</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <div className="form-section">
                        <motion.div 
                            className="form-container"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="serif-title mb-6">Send a Message</h3>
                            <form className="modern-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <select name="interest" required value={formData.interest} onChange={handleChange}>
                                        <option value="">Interested in...</option>
                                        <option value="Tour Packages">Tour Packages</option>
                                        <option value="Visa Services">Visa Services</option>
                                        <option value="Air Ticketing">Air Ticketing</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group full">
                                    <textarea name="message" placeholder="Tell us about your requirements..." rows="4" required value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="submit-btn">
                                    Send via WhatsApp <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section-new">
                    <div className="map-frame">
                        <iframe 
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

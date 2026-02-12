import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid-new">
                    {/* Left: Content */}
                    <div className="about-col">
                        <span className="section-label">EXTREME TOURS</span>
                        <h2 className="display-title">The perfect travel place for you & your family</h2>
                        <div className="happy-customers">
                            <div className="avatars">
                                <img src="https://i.pravatar.cc/100?u=1" alt="user" />
                                <img src="https://i.pravatar.cc/100?u=2" alt="user" />
                                <img src="https://i.pravatar.cc/100?u=3" alt="user" />
                                <div className="avatar-more">50+</div>
                            </div>
                            <span className="customer-text">500k+ Happy customers</span>
                        </div>
                    </div>

                    {/* Center: Image with Badge */}
                    <div className="about-col center-col">
                        <div className="circular-frame">
                            <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000" alt="Exotic Temple" />
                            <div className="expert-badge">
                                <div className="badge-inner">
                                    <svg viewBox="0 0 100 100">
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                                        <text>
                                            <textPath xlinkHref="#circlePath">
                                                ★ BOOKING ★ EXPERT ★ PERFECT ★
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="badge-logo">✈️</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats & List */}
                    <div className="about-col stats-col">
                        <h3 className="sub-heading">Waiting for adventures? Don't miss them</h3>
                        <p className="description"> Explore the world's most breathtaking destinations handpicked by our travel experts for an unforgettable experience.</p>
                        
                        <div className="experience-box">
                            {/* <div className="exp-icon">👨‍💼</div> */}
                            <div>
                                {/* <strong>We have more than 10 years of experience</strong> */}
                            </div>
                        </div>

                        <ul className="perks-list">
                            <li><span>●</span> Special discounts</li>
                            <li><span>●</span> Special discounts</li>
                            <li><span>●</span> Beautiful destinations</li>
                            <li><span>●</span> Beautiful destinations</li>
                            <li><span>●</span> For the entire family</li>
                            <li><span>●</span> For the entire family</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

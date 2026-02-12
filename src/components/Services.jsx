import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './Services.css';

const Services = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    // Determine cards per view based on window width
    const updateCardsPerView = useCallback(() => {
        const width = window.innerWidth;
        if (width >= 1024) setCardsPerView(4);
        else if (width >= 640) setCardsPerView(2);
        else setCardsPerView(1);
    }, []);

    useEffect(() => {
        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, [updateCardsPerView]);

    // Reset index if it goes out of bounds on resize
    useEffect(() => {
        const maxIndex = servicesData.length - cardsPerView;
        if (currentIndex > maxIndex) {
            setCurrentIndex(Math.max(0, maxIndex));
        }
    }, [cardsPerView, currentIndex]);

    const maxIndex = servicesData.length - cardsPerView;
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < maxIndex;

    const goToPrev = () => {
        if (canGoPrev) setCurrentIndex(prev => prev - 1);
    };

    const goToNext = () => {
        if (canGoNext) setCurrentIndex(prev => prev + 1);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleCardClick = () => {
        navigate('/services');
    };

    // Calculate number of dot positions
    const totalDots = maxIndex + 1;
    const translateX = -(currentIndex * (100 / cardsPerView));

    return (
        <section className="services-carousel-section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">What We Do</span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Expert travel solutions designed to create lasting memories across domestic and international landscapes.
                    </p>
                </motion.div>
            </div>

            {/* Slider */}
            <div className="services-slider-wrapper">
                {/* Prev Arrow */}
                <button
                    className="services-nav-btn services-nav-prev"
                    onClick={goToPrev}
                    disabled={!canGoPrev}
                    aria-label="Previous"
                >
                    <ChevronLeft size={22} />
                </button>

                {/* Track */}
                <div className="services-slider-track">
                    <div
                        className="services-slider-inner"
                        style={{ transform: `translateX(${translateX}%)` }}
                    >
                        {servicesData.map((service, index) => (
                            <motion.div
                                className="service-carousel-card"
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                onClick={handleCardClick}
                            >
                                <div className="service-card-inner">
                                    <div className="service-card-image-wrapper">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="service-card-image"
                                            draggable="false"
                                            loading="lazy"
                                        />
                                        <div className="service-card-image-overlay" />
                                    </div>
                                    <div className="service-card-body">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Next Arrow */}
                <button
                    className="services-nav-btn services-nav-next"
                    onClick={goToNext}
                    disabled={!canGoNext}
                    aria-label="Next"
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="services-dots">
                {Array.from({ length: totalDots }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`services-dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;

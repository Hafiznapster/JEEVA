import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={`hero ${loaded ? 'animate' : ''}`}>
            <div className="hero-bg-shape shape-1"></div>
            <div className="hero-bg-shape shape-2"></div>
            <div className="hero-bg-shape shape-3"></div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    <span className="hero-badge-text">Trusted by 70+ Institutions</span>
                </div>

                <h1 className="hero-title" style={{ transitionDelay: '200ms' }}>
                    Devoted to the <br />
                    <span>Highest Standards</span> in Education
                </h1>
                <p className="hero-subtitle" style={{ transitionDelay: '400ms' }}>
                    Empowering Futures, Transforming Careers! We guide students toward their dream 
                    educational institutions with personalized counseling and expert support.
                </p>
                <div className="hero-cta-wrapper" style={{ transitionDelay: '600ms' }}>
                    <a href="#contact" className="btn btn-primary cursor-scale">
                        Revitalize Your Career
                        <FiArrowRight />
                    </a>
                    <a href="#about" className="btn-hero-secondary cursor-scale">
                        <FiPlay size={18} />
                        Learn More
                    </a>
                </div>
            </div>

            <div className="scroll-indicator" onClick={handleScrollDown} role="button" tabIndex={0} aria-label="Scroll to content">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

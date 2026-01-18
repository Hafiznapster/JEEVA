import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        setTimeout(() => setLoaded(true), 100);
    }, []);

    return (
        <section id="home" className={`hero ${loaded ? 'animate' : ''}`}>
            <div className="hero-bg-shape shape-1"></div>
            <div className="hero-bg-shape shape-2"></div>

            <div className="hero-content">
                <h1 className="hero-title" style={{ transitionDelay: '200ms' }}>
                    Devoted to the <br />
                    <span>Highest Standards</span> in Education
                </h1>
                <p className="hero-subtitle" style={{ transitionDelay: '400ms' }}>
                    Empowering Futures, Transforming Careers!
                </p>
                <div className="hero-cta-wrapper" style={{ transitionDelay: '600ms' }}>
                    <a href="#contact" className="btn cursor-scale">
                        Revitalize Your Career
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

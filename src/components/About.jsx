import React, { useEffect, useRef, useState } from 'react';
import { FiGlobe, FiTarget, FiLayers } from 'react-icons/fi';
import './About.css';

// Counter Animation Hook
const useCounter = (end, duration = 2000, startOnView = true) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!startOnView) {
            setHasStarted(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted, startOnView]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const startValue = 0;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * (end - startValue) + startValue);
            
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return { count, ref };
};

const About = () => {
    const { count: institutionCount, ref: counterRef } = useCounter(70, 2000);

    const aboutCards = [
        {
            icon: <FiGlobe />,
            stat: `${institutionCount}+`,
            title: 'Our Reach',
            description: 'We have established direct connections with over 70 premier universities and institutions across Karnataka, Kerala, and Tamil Nadu.',
            highlight: true,
        },
        {
            icon: <FiTarget />,
            title: 'Our Mission',
            description: 'We are committed to giving students the encouragement and direction they need to turn their aspirations into reality. We guide students in choosing the best educational paths securely.',
            highlight: false,
        },
        {
            icon: <FiLayers />,
            title: 'Our Scope',
            description: 'We advise on admissions for a wide range of schools offering courses in fields including Medical, Engineering, Management, Allied Health, and more.',
            highlight: false,
        },
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Who We Are</span>
                    <h2 className="section-title">About Us</h2>
                    <p className="section-subtitle">
                        Vertex Education acts as trusted advisors in the field of education consultancy.
                        Our goal is to give students who want to pursue a high-quality education access to a world of opportunity.
                    </p>
                </div>

                <div className="about-grid">
                    {aboutCards.map((card, index) => (
                        <div 
                            key={index} 
                            className={`about-card cursor-scale ${card.highlight ? 'highlight' : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="about-card-icon">
                                {card.icon}
                            </div>
                            {card.stat && (
                                <span className="stat-number" ref={counterRef}>
                                    {card.stat}
                                </span>
                            )}
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <div className="card-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

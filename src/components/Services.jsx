import React from 'react';
import { FiUser, FiBriefcase, FiGlobe, FiDollarSign, FiMapPin } from 'react-icons/fi';
import './Services.css';

const Services = () => {
    const servicesData = [
        {
            icon: <FiUser />,
            title: "Admission Counseling",
            desc: "Expert advice and personalized application support to get you into your dream college.",
            color: "#1a56a6"
        },
        {
            icon: <FiBriefcase />,
            title: "Placement Support",
            desc: "100% Placement Assistance to ensure your career starts on the right path.",
            color: "#39b54a"
        },
        {
            icon: <FiGlobe />,
            title: "Global Opportunities",
            desc: "Comprehensive Study Abroad Consultation for international education.",
            color: "#e74c3c"
        },
        {
            icon: <FiDollarSign />,
            title: "Financial Aid",
            desc: "Guidance and assistance with Education Loans to fund your studies.",
            color: "#f39c12"
        },
        {
            icon: <FiMapPin />,
            title: "Campus Experience",
            desc: "Free Campus Visit to help you make an informed decision about your future home.",
            color: "#9b59b6"
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">What We Offer</span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive educational consultancy services to guide you through every step of your academic journey
                    </p>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-card cursor-scale"
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                '--service-color': service.color 
                            }}
                        >
                            <span className="service-number">0{index + 1}</span>
                            <div className="service-icon-wrapper" style={{ backgroundColor: `${service.color}15` }}>
                                <div className="service-icon" style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <div className="service-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

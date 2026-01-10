import React from 'react';
import { FaUserGraduate, FaBriefcase, FaGlobeAmericas, FaHandHoldingUsd, FaBuilding } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const servicesData = [
        {
            icon: <FaUserGraduate />,
            title: "Admission Counseling",
            desc: "Expert advice and personalized application support to get you into your dream college."
        },
        {
            icon: <FaBriefcase />,
            title: "Placement Support",
            desc: "100% Placement Assistance to ensure your career starts on the right path."
        },
        {
            icon: <FaGlobeAmericas />,
            title: "Global Opportunities",
            desc: "Comprehensive Study Abroad Consultation for international education."
        },
        {
            icon: <FaHandHoldingUsd />,
            title: "Financial Aid",
            desc: "Guidance and assistance with Education Loans to fund your studies."
        },
        {
            icon: <FaBuilding />,
            title: "Campus Experience",
            desc: "Free Campus Visit to help you make an informed decision about your future home."
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card cursor-scale">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

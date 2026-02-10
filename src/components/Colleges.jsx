import React from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';

const Colleges = () => {
    return (
        <section id="colleges" className="colleges-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Associated <span>Colleges</span></h2>
                    <p className="section-subtitle">Select a location to explore top educational institutions</p>
                </div>

                <div className="location-gateway">
                    <Link to="/colleges/kerala" className="location-gateway-card cursor-scale">
                        <div className="gateway-card-inner" style={{ backgroundImage: 'url("/kerala-card.png")' }}>
                            <div className="gateway-overlay">
                                <h3>Kerala</h3>
                                <p>Explore Institutions in Kerala</p>
                                <span className="explore-btn">Explore Now</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/colleges/bangalore" className="location-gateway-card cursor-scale">
                        <div className="gateway-card-inner bangalore-card">
                            <div className="gateway-overlay">
                                <h3>Bangalore</h3>
                                <p>Explore Institutions in Bangalore</p>
                                <span className="explore-btn">Explore Now</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/colleges/mangalore" className="location-gateway-card cursor-scale">
                        <div className="gateway-card-inner mangalore-card">
                            <div className="gateway-overlay">
                                <h3>Mangalore</h3>
                                <p>Explore Institutions in Mangalore</p>
                                <span className="explore-btn">Explore Now</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Colleges;

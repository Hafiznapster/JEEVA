import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <div className="about-header">
                    <p>
                        Vertex Education acts as trusted advisors in the field of education consultancy.
                        Our goal is to give students who want to pursue a high-quality education access to a world of opportunity.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-card cursor-scale">
                        <span className="stat-number">70+</span>
                        <h3>Our Reach</h3>
                        <p>
                            We have established direct connections with over 70 premier universities and institutions
                            across Karnataka, Kerala, and Tamil Nadu.
                        </p>
                    </div>

                    <div className="about-card cursor-scale">
                        <h3>Our Mission</h3>
                        <p>
                            We are committed to giving students the encouragement and direction they need to turn their
                            aspirations into reality. We guide students in choosing the best educational paths securely.
                        </p>
                    </div>

                    <div className="about-card cursor-scale">
                        <h3>Our Scope</h3>
                        <p>
                            We advise on admissions for a wide range of schools offering courses in fields including
                            Medical, Engineering, Management, Allied Health, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

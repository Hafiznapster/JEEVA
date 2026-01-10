import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Get in touch</h3>
                        <p>
                            Ready to start your journey? Contact us today for personalized guidance
                            and take the first step towards your dream career.
                        </p>

                        <div className="info-item cursor-scale">
                            <div className="info-icon"><FaPhoneAlt /></div>
                            <div>
                                <span>Phone</span>
                                <div style={{ color: '#fff' }}>+91 88914 93387</div>
                            </div>
                        </div>

                        <div className="info-item cursor-scale">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div>
                                <span>Email</span>
                                <div style={{ color: '#fff' }}>vertexeducationn@gmail.com</div>
                            </div>
                        </div>

                        <div className="info-item cursor-scale">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <div>
                                <span>Office</span>
                                <div style={{ color: '#fff' }}>Kerala | Karnataka | Tamil Nadu</div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" className="cursor-scale" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" className="cursor-scale" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help you?" className="cursor-scale"></textarea>
                            </div>
                            <button type="submit" className="btn cursor-scale" style={{ width: '100%', border: 'none' }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

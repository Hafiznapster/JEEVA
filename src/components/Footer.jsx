import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiSend, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Courses', href: '#courses' },
        { name: 'Colleges', href: '#colleges' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Admission Counseling',
        'Placement Support',
        'Study Abroad',
        'Education Loans',
        'Campus Visits',
    ];

    const locations = [
        'Kerala',
        'Karnataka',
        'Tamil Nadu',
    ];

    const socialLinks = [
        { icon: <FiFacebook />, href: '#', label: 'Facebook' },
        { icon: <FiInstagram />, href: '#', label: 'Instagram' },
        { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
        { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <a href="#home" className="footer-logo">
                                <img src="/vertex-logo.png" alt="Vertex Education" />
                            </a>
                            <p className="footer-tagline">
                                Empowering Futures, Transforming Careers. Your trusted partner in educational excellence.
                            </p>
                            <div className="footer-contact">
                                <a href="tel:+918891493387" className="contact-item">
                                    <FiPhone className="contact-icon" />
                                    <span>+91 88914 93387</span>
                                </a>
                                <a href="mailto:vertexeducationn@gmail.com" className="contact-item">
                                    <FiMail className="contact-icon" />
                                    <span>vertexeducationn@gmail.com</span>
                                </a>
                                <div className="contact-item">
                                    <FiMapPin className="contact-icon" />
                                    <span>Kerala | Karnataka | Tamil Nadu</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer-link">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-column">
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                {services.map((service) => (
                                    <li key={service}>
                                        <span className="footer-link">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Locations & Newsletter */}
                        <div className="footer-column">
                            <h4 className="footer-title">Locations</h4>
                            <ul className="footer-links">
                                {locations.map((location) => (
                                    <li key={location}>
                                        <span className="footer-link">{location}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="footer-newsletter">
                                <h4 className="footer-title">Newsletter</h4>
                                <p className="newsletter-text">Stay updated with latest opportunities</p>
                                <form onSubmit={handleSubscribe} className="newsletter-form">
                                    <div className="newsletter-input-wrapper">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="newsletter-input"
                                            required
                                        />
                                        <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                                            <FiSend />
                                        </button>
                                    </div>
                                    {subscribed && (
                                        <span className="newsletter-success">Thanks for subscribing!</span>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} Vertex - The Career Expert. All rights reserved.
                        </p>

                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <div className="footer-legal">
                            <a href="#" className="legal-link">Privacy Policy</a>
                            <span className="legal-separator">|</span>
                            <a href="#" className="legal-link">Terms of Service</a>
                        </div>

                        <button
                            className="scroll-top-btn"
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                        >
                            <FiArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

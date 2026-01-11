import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo cursor-scale">
                    <img src="/vertex-logo.svg" alt="Vertex - The Career Expert" className="logo-img" />
                </div>
                <ul className="nav-links">
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link cursor-scale">Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link cursor-scale">About</a></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="nav-link cursor-scale">Services</a></li>
                    <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }} className="nav-link cursor-scale">Courses</a></li>
                    <li><a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }} className="nav-link cursor-scale">Partners</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-cta cursor-scale">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

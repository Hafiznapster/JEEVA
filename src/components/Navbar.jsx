import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: id } });
        }
    };

    useEffect(() => {
        if (location.pathname === '/' && location.state && location.state.scrollTo) {
            const id = location.state.scrollTo;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            // Clear state
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="container">
                <Link to="/" className="logo cursor-scale" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/vertex-logo.png" alt="Vertex - The Career Expert" className="logo-img" />
                </Link>

                <div className="hamburger cursor-scale" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-link cursor-scale">Home</a></li>
                    <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link cursor-scale">About</a></li>
                    <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link cursor-scale">Services</a></li>
                    <li><a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="nav-link cursor-scale">Courses</a></li>
                    <li><a href="#partners" onClick={(e) => handleNavClick(e, 'partners')} className="nav-link cursor-scale">Partners</a></li>
                    <li><a href="#colleges" onClick={(e) => handleNavClick(e, 'colleges')} className="nav-link cursor-scale">Colleges</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-cta cursor-scale">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

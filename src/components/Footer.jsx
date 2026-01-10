import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 20px',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'var(--text-muted)',
            background: 'var(--bg-dark)'
        }}>
            <div className="container">
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '20px' }}>
                    VERTEX EDUCATION
                </div>
                <p>&copy; {new Date().getFullYear()} Vertex Education. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

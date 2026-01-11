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
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                    <img src="/vertex-logo.svg" alt="Vertex - The Career Expert" style={{ height: '60px', width: 'auto' }} />
                </div>
                <p>&copy; {new Date().getFullYear()} Vertex - The Career Expert. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

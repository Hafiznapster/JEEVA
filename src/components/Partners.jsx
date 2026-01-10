import React from 'react';
import './Partners.css';

const domestic = [
    "Manipal Academy of Higher Education", "Yenepoya", "Christ (Bangalore)",
    "Ramaiah Institute of Technology", "Jain University", "SRM University",
    "Reva University", "Acharya Institutes", "Srinivas University",
    "Apollo College of Nursing", "Vydehi", "East Point Institutions"
];

const international = [
    "Liverpool John Moores University", "Cardiff Metropolitan University",
    "University of Salford, Manchester", "Middlesex University",
    "De Montfort University Leicester", "Anglia Ruskin University",
    "Teesside University", "University of Greenwich",
    "University of East London", "King's College London"
];

const Partners = () => {
    return (
        <section id="partners" className="partners-section">
            <div className="container">
                <h2 className="section-title">Our Partners</h2>

                <div className="partners-category">
                    <h3>Domestic Institutions</h3>
                    <div className="marquee">
                        {/* Duplicated content for seamless scroll */}
                        <div className="marquee-content">
                            {domestic.map((name, i) => <div key={i} className="partner-card cursor-scale">{name}</div>)}
                            {domestic.map((name, i) => <div key={`dup-${i}`} className="partner-card cursor-scale">{name}</div>)}
                        </div>
                    </div>
                </div>

                <div className="partners-category">
                    <h3>International Associates</h3>
                    <div className="marquee">
                        <div className="marquee-content reverse">
                            {international.map((name, i) => <div key={i} className="partner-card cursor-scale">{name}</div>)}
                            {international.map((name, i) => <div key={`dup-${i}`} className="partner-card cursor-scale">{name}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;

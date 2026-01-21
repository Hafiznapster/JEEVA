import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Colleges.css';
import yeldoImg from '../assets/yeldo-mar-baselios.jpg';
import alAzharImg from '../assets/al-azhar.png';
import jaiBharathImg from '../assets/jai-bharath.jpg';

const CollegeListPage = () => {
    const { location } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const collegeData = {
        kerala: [
            { name: "Yeldo Mar Baselios College", image: yeldoImg },
            { name: "Al-Azhar", image: alAzharImg },
            { name: "Jai Bharath", image: jaiBharathImg },
            { name: "ELMS", image: null },
            { name: "Al-Ameen", image: null },
            { name: "Alshifa College of Arts & Science", image: null },
            { name: "Naipunnya", image: null },
            { name: "Nagasariga", image: null },
            { name: "KMCT", image: null },
            { name: "Sivam College", image: null },
            { name: "KMT (Institute of Paramedical Sciences)", image: null },
            { name: "Rims Knowledge City", image: null },
            { name: "Mount Zion", image: null },
            { name: "ICCS", image: null },
            { name: "MES College Erumely", image: null }
        ],
        bangalore: []
    };

    const currentData = collegeData[location.toLowerCase()] || [];
    const locationName = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

    return (
        <div className="college-list-page">
            <div className="container">
                <button className="back-btn cursor-scale" onClick={() => navigate(-1)}>
                    &larr; Back to Home
                </button>
                <div className="section-header">
                    <h2 className="section-title">Colleges in <span>{locationName}</span></h2>
                    <p className="section-subtitle">Explore top educational institutions in {locationName}</p>
                </div>

                <div className="colleges-grid">
                    {currentData.length > 0 ? (
                        currentData.map((college, index) => (
                            <div key={index} className="college-card cursor-scale">
                                <div className="card-inner">
                                    <div
                                        className={`card-image-placeholder ${college.image ? 'has-image' : ''}`}
                                        style={college.image ? { backgroundImage: `url(${college.image})` } : {}}
                                    >
                                        {!college.image && (
                                            <div className="placeholder-pattern"></div>
                                        )}
                                    </div>
                                    <div className="card-content">
                                        <h3>{college.name}</h3>
                                        <p>{locationName}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-data">
                            <p>Coming Soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CollegeListPage;

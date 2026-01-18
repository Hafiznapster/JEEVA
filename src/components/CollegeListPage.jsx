import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Colleges.css';

const CollegeListPage = () => {
    const { location } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const collegeData = {
        kerala: [
            "Telko Mar Baselios College",
            "Al-Azhar",
            "Jai Bharath",
            "ELMS",
            "Al-Ameen",
            "Alshifa College of Arts & Science",
            "Naipunnya",
            "Nagasariga",
            "KMCT",
            "Sivam College",
            "KMT (Institute of Paramedical Sciences)",
            "Rims Knowledge City",
            "Mount Zion",
            "ICCS",
            "MES College Erumely"
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
                                    <div className="card-image-placeholder">
                                        {/* Image placeholder */}
                                    </div>
                                    <div className="card-content">
                                        <h3>{college}</h3>
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

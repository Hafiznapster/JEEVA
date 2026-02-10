import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiSearch, FiChevronRight, FiMapPin, FiHome, FiGrid, FiBookOpen } from 'react-icons/fi';
import './Colleges.css';
import yeldoImg from '../assets/yeldo-mar-baselios.jpg';
import alAzharImg from '../assets/al-azhar.png';
import jaiBharathImg from '../assets/jai-bharath.jpg';
import naipunyaImg from '../assets/naipunya.jpg';
import kmctImg from '../assets/kmct.jpg';
import alAmeenImg from '../assets/al-ameen.jpg';
import mountZionImg from '../assets/mount-zion.jpg';
import iccsImg from '../assets/iccs.jpg';
import alshifaImg from '../assets/alshifa.jpg';
import mesErumelyImg from '../assets/mes-erumely.jpg';
import elmsImg from '../assets/elms-thrissur.png';

// Bangalore colleges
import sapthagiriImg from '../assets/bangalore-sapthagiri.jpg';
import krupanidhiImg from '../assets/bangalore-krupanidhi.webp';
import sambhramImg from '../assets/bangalore-sambhram.jpg';
import presidencyImg from '../assets/bangalore-presidency.jpg';
import koshysImg from '../assets/bangalore-koshys.webp';
import hkbkImg from '../assets/bangalore-hkbk.jpg';
import sriDevarajUrsImg from '../assets/bangalore-sri-devaraj-urs.png';

// Mangalore colleges
import srinivasImg from '../assets/mangalore-srinivas.jpg';
import yenapoyaImg from '../assets/mangalore-yenapoya.jpg';
import ajInstituteImg from '../assets/mangalore-aj-institute.jpg';
import manipalImg from '../assets/mangalore-manipal.jpg';

// Skeleton Card Component
const SkeletonCard = () => (
    <div className="college-card skeleton">
        <div className="card-inner">
            <div className="skeleton-image">
                <div className="skeleton-shimmer"></div>
            </div>
            <div className="card-content">
                <div className="skeleton-text skeleton-title"></div>
                <div className="skeleton-text skeleton-subtitle"></div>
            </div>
        </div>
    </div>
);

// Empty State Card Component
const EmptyStateCard = ({ name }) => (
    <div className="empty-state-content">
        <FiBookOpen className="empty-icon" />
        <span className="empty-text">Image Coming Soon</span>
    </div>
);

// College Card Component
const CollegeCard = ({ college, index, locationName }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div key={index} className="college-card cursor-scale">
            <div className="card-inner">
                <div className="card-image-wrapper">
                    {college.image && !imageError ? (
                        <>
                            {!imageLoaded && <div className="skeleton-image"><div className="skeleton-shimmer"></div></div>}
                            <img
                                src={college.image}
                                alt={college.name}
                                className={`card-image ${imageLoaded ? 'loaded' : ''}`}
                                loading="lazy"
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                            />
                        </>
                    ) : (
                        <div className="card-image-placeholder">
                            <EmptyStateCard name={college.name} />
                        </div>
                    )}
                </div>
                <div className="card-content">
                    <h3>{college.name}</h3>
                    <div className="college-location">
                        <FiMapPin className="location-icon" />
                        <span>{college.location || locationName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Breadcrumbs Component
const Breadcrumbs = ({ locationName }) => (
    <nav className="breadcrumbs">
        <Link to="/" className="breadcrumb-item">
            <FiHome className="breadcrumb-icon" />
            <span>Home</span>
        </Link>
        <FiChevronRight className="breadcrumb-separator" />
        <Link to="/#colleges" className="breadcrumb-item">
            <FiGrid className="breadcrumb-icon" />
            <span>Colleges</span>
        </Link>
        <FiChevronRight className="breadcrumb-separator" />
        <span className="breadcrumb-item active">{locationName}</span>
    </nav>
);

// Search Bar Component
const SearchBar = ({ value, onChange }) => (
    <div className="search-bar-container">
        <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search colleges by name..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="search-input"
            />
        </div>
    </div>
);

// Decorative Map Component
const DecorativeMap = ({ colleges }) => {
    const collegesWithImages = colleges.filter(c => c.image);
    
    return (
        <div className="decorative-map">
            <div className="map-container">
                <svg viewBox="0 0 400 600" className="kerala-map">
                    {/* Kerala outline - simplified SVG path */}
                    <path
                        className="kerala-outline"
                        d="M120,50 Q150,45 180,55 Q220,60 250,80 Q280,100 300,130 Q320,160 325,200 Q330,240 320,280 Q310,320 295,360 Q280,400 260,440 Q240,480 220,520 Q200,560 180,590 L160,580 Q140,540 130,500 Q120,460 115,420 Q110,380 108,340 Q106,300 105,260 Q104,220 105,180 Q106,140 110,100 Q114,60 120,50 Z"
                    />
                    {/* Decorative grid lines */}
                    <g className="map-grid">
                        {[...Array(8)].map((_, i) => (
                            <line key={`h-${i}`} x1="50" y1={80 + i * 60} x2="350" y2={80 + i * 60} />
                        ))}
                        {[...Array(6)].map((_, i) => (
                            <line key={`v-${i}`} x1={80 + i * 50} y1="50" x2={80 + i * 50} y2="580" />
                        ))}
                    </g>
                </svg>
                
                {/* Animated location pins */}
                <div className="map-pins">
                    {collegesWithImages.slice(0, 6).map((college, index) => (
                        <div
                            key={index}
                            className="map-pin"
                            style={{
                                left: `${25 + (index % 3) * 20}%`,
                                top: `${20 + Math.floor(index / 3) * 30}%`,
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            <div className="pin-marker"></div>
                            <div className="pin-pulse"></div>
                        </div>
                    ))}
                </div>
                
                {/* Map legend */}
                <div className="map-legend">
                    <div className="legend-item">
                        <div className="legend-dot active"></div>
                        <span>Colleges with Images</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot"></div>
                        <span>More Locations</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CollegeListPage = () => {
    const { location } = useParams();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Simulate loading state
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const collegeData = {
        kerala: [
            { name: "Yeldo Mar Baselios College", image: yeldoImg },
            { name: "Al-Azhar", image: alAzharImg },
            { name: "Jai Bharath", image: jaiBharathImg },
            { name: "ELMS College of Nursing, Thrissur", image: elmsImg },
            { name: "Al-Ameen", image: alAmeenImg },
            { name: "Alshifa College of Arts & Science", image: alshifaImg },
            { name: "Naipunnya", image: naipunyaImg },
            { name: "Nagasariga", image: null },
            { name: "KMCT", image: kmctImg },
            { name: "Sivam College", image: null },
            { name: "KMT (Institute of Paramedical Sciences)", image: null },
            { name: "Rims Knowledge City", image: null },
            { name: "Mount Zion", image: mountZionImg },
            { name: "ICCS", image: iccsImg },
            { name: "MES College Erumely", image: mesErumelyImg }
        ],
        bangalore: [
            { name: "Sapthagiri College of Engineering", image: sapthagiriImg },
            { name: "Krupanidhi College", image: krupanidhiImg },
            { name: "Sambhram Institute of Technology (SAIT)", image: sambhramImg },
            { name: "Presidency University", image: presidencyImg },
            { name: "Koshys Group of Institutions (KGI)", image: koshysImg },
            { name: "HKBK College of Engineering", image: hkbkImg },
            { name: "Sri Devaraj Urs Medical College", image: sriDevarajUrsImg }
        ],
        mangalore: [
            { name: "Srinivas University", image: srinivasImg },
            { name: "Yenapoya University", image: yenapoyaImg },
            { name: "A.J. Institute of Medical Sciences and Research Centre", image: ajInstituteImg },
            { name: "Manipal Academy of Higher Education (MAHE)", image: manipalImg },
            { name: "Nitte Meenakshi Institute of Technology (NMIT)", image: null }
        ]
    };

    const currentData = collegeData[location.toLowerCase()] || [];
    const locationName = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

    // Filter colleges based on search query
    const filteredColleges = useMemo(() => {
        if (!searchQuery.trim()) return currentData;
        return currentData.filter(college =>
            college.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [currentData, searchQuery]);

    return (
        <div className="college-list-page">
            {/* Hero Section */}
            <div className="college-hero">
                <div className="container">
                    <Breadcrumbs locationName={locationName} />
                    
                    <div className="hero-content">
                        <button className="back-btn cursor-scale" onClick={() => navigate(-1)}>
                            &larr; Back to Home
                        </button>
                        
                        <div className="section-header">
                            <h1 className="section-title">Colleges in <span>{locationName}</span></h1>
                            <p className="section-subtitle">
                                Explore {currentData.length}+ top educational institutions in {locationName}
                            </p>
                        </div>
                        
                        <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="college-content">
                <div className="container">
                    {/* Stats Bar */}
                    <div className="stats-bar">
                        <div className="stat-item">
                            <span className="stat-value">{filteredColleges.length}</span>
                            <span className="stat-label">Colleges</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{filteredColleges.filter(c => c.image).length}</span>
                            <span className="stat-label">With Photos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{locationName}</span>
                            <span className="stat-label">Location</span>
                        </div>
                    </div>

                    {/* Colleges Grid */}
                    <div className="colleges-grid-full">
                        {isLoading ? (
                            [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
                        ) : filteredColleges.length > 0 ? (
                            filteredColleges.map((college, index) => (
                                <CollegeCard key={index} college={college} index={index} locationName={locationName} />
                            ))
                        ) : (
                            <div className="no-results">
                                <FiSearch className="no-results-icon" />
                                <h3>No colleges found</h3>
                                <p>Try adjusting your search terms</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeListPage;

import React from 'react';
import './Courses.css';

const coursesData = [
    {
        category: "Medical & Health Sciences",
        items: ["MBBS", "BDS", "MDS", "MD", "MS", "BAMS", "BHMS", "BNYS", "Pharm D", "M Pharm", "B Pharm", "D Pharm", "B.Sc Nursing", "GNM", "PB. B.Sc Nursing", "M.Sc Nursing", "BPT", "MPT", "Doctor of Physiotherapy", "BASLP", "MASLP", "MHA", "MSW", "MPH"]
    },
    {
        category: "Allied Health Science",
        items: ["B.Sc Medical Laboratory Technology", "B.Sc Medical Imaging Technology", "B.Sc Renal Dialysis Technology", "B.Sc Anesthesia & OT", "B.Sc Optometry", "B.Sc Perfusion Care Technology", "B.Sc Respiratory Care Technology", "B.Sc Cardiac Care Technology", "Emergency & Trauma Care", "Neuroscience Technology"]
    },
    {
        category: "Engineering & Architecture",
        items: ["IT", "Electronics", "B.Tech Mechanical", "Civil", "AI", "Marine", "Food Technology", "Bio-Medical", "Aeronautical", "Automobile", "B.Arch", "M.Arch"]
    },
    {
        category: "Management & Commerce",
        items: ["MBA Marketing", "HR", "Finance", "Logistics", "Business Analytics", "Aviation Management", "Hotel & Tourism", "Hospital & Health Care", "Supply Chain", "BBA", "B.Com", "BTTM", "M.Com", "BHM", "BHS", "BHA"]
    },
    {
        category: "Science, Arts & Law",
        items: ["LLB", "BA LLB", "BBA LLB", "B.Com LLB", "BCA", "MCA", "Psychology", "Data Science", "Agriculture", "Interior Design", "Fashion Design", "Forensic Science", "Maths", "Physics", "Botany", "Chemistry", "BSW"]
    },
    {
        category: "Add-On & Professional Certifications",
        items: ["Aviation & Logistics", "ACCA", "CMA", "Cyber Security & Ethical Hacking", "Artificial Intelligence", "Machine Learning & IoT", "Digital Marketing", "Hospitality Management"]
    }
];

const Courses = () => {
    return (
        <section id="courses" className="courses-section">
            <div className="container">
                <h2 className="section-title">Courses Offered</h2>
                <div className="courses-grid">
                    {coursesData.map((category, index) => (
                        <div key={index} className="course-category-card cursor-scale">
                            <h3 className="course-category-title">{category.category}</h3>
                            <div className="course-list">
                                {category.items.map((item, idx) => (
                                    <span key={idx} className="course-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;

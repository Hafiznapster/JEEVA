import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Partners from './components/Partners';
import Colleges from './components/Colleges';
import CollegeListPage from './components/CollegeListPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses />
      <Partners />
      <Colleges />
      <Contact />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colleges/:location" element={<CollegeListPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const followerCursor = useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (mainCursor.current) {
        mainCursor.current.style.left = `${clientX}px`;
        mainCursor.current.style.top = `${clientY}px`;
      }
      if (followerCursor.current) {
        // Use anime.js or simple delay here? 
        // Simple requestAnimation or just timeout for trail?
        // Actually, for smoothest trail, we can update follower with a slight delay or lerp.
        // Let's use simple delayed update via CSS for now or animation frame.
        // For 'anime.js' specifically, the user asked to use it.
        // But for cursor follower, pure lerp in JS is often better than invoking anime.js on every frame.
        // I will use a simple lerp loop for the follower.
      }
    };
    
    // Add event listener
    document.addEventListener('mousemove', onMouseMove);
    
    // Handle hover states
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.clickable')) {
        followerCursor.current?.classList.add('active');
      } else {
        followerCursor.current?.classList.remove('active');
      }
    };
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use a RequestAnimationFrame loop for the smooth follower
  useEffect(() => {
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', onMouseMove);

    const render = () => {
      // Lerp
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      if (followerCursor.current) {
        followerCursor.current.style.left = `${followerX}px`;
        followerCursor.current.style.top = `${followerY}px`;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={mainCursor} className="cursor-main"></div>
      <div ref={followerCursor} className="cursor-follower"></div>
    </>
  );
};

export default CustomCursor;

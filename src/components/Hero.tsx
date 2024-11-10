import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'calc(100vh - 60px)', margin: '0 auto', maxWidth: '1200px' }}>
        <div
          style={{
            flex: 1,
            backgroundImage: "url('/KM2.jpg')",
            backgroundSize: 'contain',
            backgroundPosition: 'center left',
            backgroundRepeat: 'no-repeat',
            height: '60%',
          }}
        ></div>

        <div style={{ flex: 1, color: '#fff', fontSize: '7rem', fontWeight: 'bold', textAlign: 'center', lineHeight: '1.1' }}>
          <p>Muhib</p>
          <p>Anwar</p>
          <p>Here</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

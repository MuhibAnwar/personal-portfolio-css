import React from 'react';
import Image from 'next/image';

interface PropsT1 {
  title: string;
  des: string;
  img: string;
  tages: string[];
}

const Cards: React.FC<PropsT1> = ({ title, des, img, tages }) => {
  return (
    <div
      style={{
        border: '1px solid white', 
        width: '300px', 
        marginBottom: '1rem',
        padding: '3px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      }}
      data-aos="zoom-in-up"
    >
      {/* Image */}
      <Image
        src={img}
        width={350}
        height={350}
        alt={title}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
      />
      
      
      <div style={{ paddingTop: '1rem' }}>
    
        <div style={{ fontSize: '2rem', fontWeight: '300' }}>{title}</div>
        
        
        <div style={{ marginTop: '1rem' }}>{des}</div>
        
        
        <div style={{ marginTop: '1rem' }}>
          {tages.map((el) => (
            <div
              key={el}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                margin: '0.5rem',
                backgroundColor:"blue", 
                borderRadius: '5px', 
                fontSize: '1rem',
                color: 'white', 
              }}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

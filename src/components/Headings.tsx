import React from 'react';

interface PropsT {
  title: string;
}

const Headings: React.FC<PropsT> = ({ title }) => {
  return (
    <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
      <p
        style={{
          display: 'inline-block',
          borderBottom: '4px solid white',
          paddingBottom: '0.5rem',
          fontSize: '1rem', 
          fontWeight: '500',
          color:"white"
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default Headings;

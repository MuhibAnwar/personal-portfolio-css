import React from 'react';

const About = () => {
  return (
    <div id="about" style={{ paddingTop: '12rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1
        style={{
          fontSize: '5rem',
          fontWeight: '600',
          textAlign: 'center',
          fontFamily: 'serif',
          color: "white"
        }}
        data-aos="zoom-in-up"
      >
        About me
      </h1>

      <p
        style={{
          fontSize: '1rem',
          color: 'white',
          fontFamily: 'sans-serif',
          textAlign: 'justify',  
          lineHeight: '1.8',  
          width: '100%',  
          padding: '0 1rem', 
        }}
        data-aos="zoom-in-up"
      >
        Hi there! I am a passionate Computer Science student with a deep interest in technology, programming, and problem-solving. I am always eager to learn new skills, explore innovative ideas, and apply my knowledge in real-world projects. Currently enrolled in GIAIC, I have honed my technical skills in areas like software development, algorithms, and data structures. My journey began with a solid foundation in Matriculation from BSEK, and now I am continuing my studies in the intermediate level at D.J. Science Sindh Govt. College. If you are looking for a dedicated and driven individual to collaborate with or work on exciting projects in the tech field, I do love to connect and discuss potential opportunities. Let's create something amazing together!
      </p>
    </div>
  );
};

export default About;

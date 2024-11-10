import React from 'react';

const Skills = () => {
  return (
    <div id="skills" style={{ paddingTop: '8rem', backgroundColor:"rgb(22,16,16)", paddingBottom: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold',color:"white" }}>ABOUT MY SKILLS</h2>
          <p style={{ color: 'gray', paddingTop: '0.5rem' }}>
          I possess a strong foundation in web development, with expertise in TypeScript and Next.js for building modern, scalable web applications. I am proficient in front-end technologies such as HTML and CSS, allowing me to create responsive and user-friendly interfaces. My technical skills are complemented by a solid understanding of communication, which enables me to collaborate effectively with both team members and clients. Additionally, my problem-solving mindset and ability to adapt to new technologies 
          ensure that I can tackle challenges and deliver high-quality results in any project I undertake.
            
          </p>
        </div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '2rem', color: 'white' }}>
          <div>
            <p>TypeScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div>
            <p>Next.js</p>
            <p>WordPress</p>
            <p>Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

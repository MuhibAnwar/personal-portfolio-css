import React from 'react';
import Headings from './Headings';
import Cards from './Cards';

const data = [
  {
    id: 0,
    title: "Resume Builder",
    descri: "A resume builder that helps users create resumes quickly and easily.",
    img: "/screen.png", 
    tags: ["HTML", "CSS", "TYPESCRIPT"]
  },
  {
    id: 1,
    title: "CLI PROJECTS",
    descri: "CLI projects made with Typescript that work on Command Prompt only.",
    img: "/muh.jpeg",
    tags: ["TYPESCRIPT"]
  }
];

const Projects = () => {
  return (
    <div id="projects" style={{ paddingTop: '8rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Headings title="My Projects" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' ,color:"white" }}>
        {data.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            des={el.descri} 
            img={el.img}
            tages={el.tags} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

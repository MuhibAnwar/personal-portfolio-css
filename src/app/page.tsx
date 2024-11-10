"use client"

import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
"use client";
import { useEffect, useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden relative">
      <AnimatedBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <Header />
        <Hero />
        <Projects />
        <SocialLinks />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

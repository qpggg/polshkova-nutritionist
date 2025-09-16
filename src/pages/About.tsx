import React from 'react';
import HeroAbout from '../components/sections/about/HeroAbout';
import Biography from '../components/sections/about/Biography';
import Education from '../components/sections/about/Education';
import Philosophy from '../components/sections/about/Philosophy';
import PersonalStory from '../components/sections/about/PersonalStory';

const About: React.FC = () => {
  return (
    <div className="about">
      <HeroAbout />
      <Biography />
      <Education />
      <Philosophy />
      <PersonalStory />
    </div>
  );
};

export default About;

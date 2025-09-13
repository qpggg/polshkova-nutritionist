import React from 'react';
import Hero from '../components/sections/Hero';
import WhatIsNutrition from '../components/sections/WhatIsNutrition';
import WhoIHelp from '../components/sections/WhoIHelp';
import WhyMe from '../components/sections/WhyMe';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <WhatIsNutrition />
      <WhoIHelp />
      <WhyMe />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;

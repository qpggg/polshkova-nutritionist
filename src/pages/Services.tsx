import React from 'react';
import ServicesGrid from '../components/sections/services/ServicesGrid';
import ServiceProcess from '../components/sections/services/ServiceProcess';

const Services: React.FC = () => {
  return (
    <div className="services">
      <ServicesGrid />
      <ServiceProcess />
    </div>
  );
};

export default Services;

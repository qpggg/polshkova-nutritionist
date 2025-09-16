import React from 'react';
import HeroBMI from '../components/sections/bmi/HeroBMI';
import BMICalculatorMain from '../components/sections/bmi/BMICalculatorMain';
import BMIInfo from '../components/sections/bmi/BMIInfo';

const BMICalculator: React.FC = () => {
  return (
    <div className="bmi-calculator-page">
      <HeroBMI />
      <BMICalculatorMain />
      <BMIInfo />
    </div>
  );
};

export default BMICalculator;

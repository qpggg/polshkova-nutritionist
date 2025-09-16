import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BMICalculator from './pages/BMICalculator';
import Contacts from './pages/Contacts';

// Import all CSS files
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Layout.css';
import './styles/Hero.css';
import './styles/WhatIsNutrition.css';
import './styles/WhoIHelp.css';
import './styles/Services.css';
import './styles/WhyMe.css';
import './styles/Testimonials.css';
import './styles/ContactCTA.css';
import './styles/About.css';
import './styles/BMICalculator.css';
import './styles/Contacts.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as we create pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
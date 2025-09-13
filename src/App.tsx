import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as we create pages */}
          <Route path="/about" element={<div>О специалисте (в разработке)</div>} />
          <Route path="/services" element={<div>Услуги (в разработке)</div>} />
          <Route path="/resources" element={<div>Полезное (в разработке)</div>} />
          <Route path="/contacts" element={<div>Контакты (в разработке)</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
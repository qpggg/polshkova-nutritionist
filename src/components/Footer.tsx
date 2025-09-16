import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-text">
                Нутрициолог <span className="text-orange">Мичуринск</span>
              </span>
              <p className="footer-description">
                Первый дипломированный нутрициолог в Мичуринске. Помогаю наладить 
                правильное питание без диет и ограничений.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Навигация</h3>
            <ul className="footer-links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/about">О специалисте</Link></li>
              <li><Link to="/services">Услуги</Link></li>
              <li><Link to="/resources">Полезное</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Услуги</h3>
            <ul className="footer-links">
              <li><Link to="/services/consultation">Консультации</Link></li>
              <li><Link to="/services/nutrition-plans">Планы питания</Link></li>
              <li><Link to="/services/children">Детская нутрициология</Link></li>
              <li><Link to="/services/diseases">При заболеваниях</Link></li>
              <li><Link to="/services/lectures">Лекции и вебинары</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Нутрициолог Мичуринск. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

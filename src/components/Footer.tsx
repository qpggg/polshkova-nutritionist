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

          {/* Contacts */}
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-links">
              <li><a href="tel:+79156720703">+7 915 672 07 03</a></li>
              <li><a href="mailto:tanya.polshkova.75@mail.ru">tanya.polshkova.75@mail.ru</a></li>
              <li><a href="https://wa.me/79156720703" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://t.me/nutritionist_michurinsk" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><Link to="/contacts">Все контакты</Link></li>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

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

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <div className="footer-contacts">
              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:+79876543210">+7 (987) 654-32-10</a>
              </div>
              <div className="contact-item">
                <MessageCircle size={18} />
                <a 
                  href="https://wa.me/79876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:info@nutritionist-michurinsk.ru">
                  info@nutritionist-michurinsk.ru
                </a>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Мичуринск + онлайн по России</span>
              </div>
              <div className="contact-item">
                <Clock size={18} />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Нутрициолог Мичуринск. Все права защищены.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Политика конфиденциальности</Link>
              <Link to="/terms">Пользовательское соглашение</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

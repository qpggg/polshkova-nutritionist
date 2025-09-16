import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О специалисте', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Калькулятор', href: '/bmi-calculator' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <span className="logo-text">
                <span className="logo-line">Нутрициолог</span>
                <span className="logo-line text-orange">Мичуринск</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${
                    isActiveLink(item.href) ? 'nav-link-active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <div className="nav-contact desktop-nav">
              <a href="tel:+79156720703" className="header-phone-button">
                <Phone size={20} />
                <span className="header-phone-number">+7 915 672 07 03</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav">
              <div className="mobile-nav-links">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`mobile-nav-link ${
                      isActiveLink(item.href) ? 'mobile-nav-link-active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mobile-nav-contact">
                <a href="tel:+79156720703" className="mobile-header-phone-button">
                  <Phone size={20} />
                  <span className="mobile-header-phone-number">+7 915 672 07 03</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

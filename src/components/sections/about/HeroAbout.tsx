import React from 'react';
import { GraduationCap, Heart, Award } from 'lucide-react';

const HeroAbout: React.FC = () => {
  return (
    <section className="hero-about">
      <div className="container">
        <div className="hero-about-content">
          {/* Text Content */}
          <div className="hero-about-text">
            <h1 className="hero-about-title">
              О <span className="text-orange">специалисте</span>
            </h1>
            
            <p className="hero-about-subtitle">
              Дипломированный нутрициолог с профессиональным образованием и 
              большим опытом работы. Помогаю людям наладить правильное питание 
              и улучшить качество жизни.
            </p>

            <div className="hero-about-stats">
              <div className="hero-about-stat">
                <GraduationCap className="hero-about-stat-icon" />
                <div className="hero-about-stat-content">
                  <div className="hero-about-stat-number">2+</div>
                  <div className="hero-about-stat-label">года опыта</div>
                </div>
              </div>
              
              <div className="hero-about-stat">
                <Award className="hero-about-stat-icon" />
                <div className="hero-about-stat-content">
                  <div className="hero-about-stat-number">№1</div>
                  <div className="hero-about-stat-label">в Мичуринске</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="hero-about-image">
            <div className="hero-about-image-container">
              <img
                src="/images/nutritionist-hero-products.png"
                alt="Здоровые продукты питания - основа правильного питания"
                className="hero-about-img"
              />
              <div className="hero-about-badge">
                <Heart className="hero-about-badge-icon" />
                <div className="hero-about-badge-text">
                  <div className="hero-about-badge-title">Забота</div>
                  <div className="hero-about-badge-subtitle">о здоровье</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-about-bg-elements">
        <div className="hero-about-bg-circle hero-about-bg-circle-1"></div>
        <div className="hero-about-bg-circle hero-about-bg-circle-2"></div>
        <div className="hero-about-bg-circle hero-about-bg-circle-3"></div>
      </div>
    </section>
  );
};

export default HeroAbout;

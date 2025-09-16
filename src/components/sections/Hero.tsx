import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Heart, Salad, Video } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Первый дипломированный{' '}
              <span className="text-orange">нутрициолог</span>{' '}
              в Мичуринске
            </h1>
            
            <p className="hero-subtitle">
              Помогу наладить правильное питание без диет и ограничений. 
              Работаю с причинами, а не симптомами. Онлайн консультации 
              для жителей всей России.
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <Star className="hero-feature-icon" />
                <span>Без диет и ограничений</span>
              </div>
              <div className="hero-feature">
                <Users className="hero-feature-icon" />
                <span>Индивидуальный подход</span>
              </div>
              <div className="hero-feature">
                <Heart className="hero-feature-icon" />
                <span>Забота о здоровье</span>
              </div>
            </div>

            <div className="hero-cta">
              <Link 
                to="/contacts" 
                className="btn btn-primary btn-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                Записаться на консультацию
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                О специалисте
              </Link>
            </div>

          </div>

          {/* Image Content */}
          <div className="hero-image">
            <div className="hero-image-container">
              <img 
                src="/images/nutrionist-hero.png" 
                alt="Здоровые продукты питания - нутрициолог в Мичуринске"
                className="hero-img"
              />
              <div className="hero-image-badge">
                <div className="hero-image-badge-content">
                  <Star className="hero-badge-icon" />
                  <div>
                    <div className="hero-badge-title">100%</div>
                    <div className="hero-badge-subtitle">Качество</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hero-floating-card hero-card-1">
              <Salad size={24} className="text-orange" />
              <div className="hero-card-text">
                <div className="hero-card-title">Здоровое питание</div>
                <div className="hero-card-subtitle">Без диет</div>
              </div>
            </div>

            <div className="hero-floating-card hero-card-2">
              <Video size={24} className="text-orange" />
              <div className="hero-card-text">
                <div className="hero-card-title">Онлайн</div>
                <div className="hero-card-subtitle">консультации</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div className="hero-bg-circle hero-bg-circle-1"></div>
        <div className="hero-bg-circle hero-bg-circle-2"></div>
        <div className="hero-bg-circle hero-bg-circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;

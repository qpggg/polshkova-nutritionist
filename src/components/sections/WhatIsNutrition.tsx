import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Utensils, Target, Users, CheckCircle, X, Clock, Stethoscope, Salad, ArrowRight, Sparkles } from 'lucide-react';

const WhatIsNutrition: React.FC = () => {
  const differences = [
    {
      icon: <Heart size={24} />,
      title: 'Работа с причинами',
      description: 'Нутрициолог ищет первопричины проблем с питанием и здоровьем',
      highlight: 'Нутрициолог'
    },
    {
      icon: <Utensils size={24} />,
      title: 'Без диет и ограничений',
      description: 'Помогаем наладить сбалансированное питание без жестких запретов',
      highlight: 'Без диет'
    },
    {
      icon: <Target size={24} />,
      title: 'Индивидуальный подход',
      description: 'Учитываем особенности организма, образ жизни и предпочтения',
      highlight: 'Персонально'
    },
    {
      icon: <Users size={24} />,
      title: 'Долгосрочный результат',
      description: 'Формируем здоровые пищевые привычки на всю жизнь',
      highlight: 'Навсегда'
    }
  ];

  return (
    <section className="section what-is-nutrition">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Что такое <span className="text-orange">нутрициология</span>?
          </h2>
          <p className="section-subtitle">
            Нутрициология — это наука о питании, которая изучает влияние пищи на организм человека. 
            В отличие от диетологии, нутрициология не назначает диеты, а помогает наладить 
            правильное питание с учетом индивидуальных особенностей.
          </p>
        </div>

        <div className="nutrition-content">
          {/* Main explanation */}
          <div className="nutrition-explanation">
            <div className="explanation-card">
              <div className="explanation-header">
                <h3>Нутрициолог ≠ Диетолог</h3>
                <p>Важные отличия в подходе к питанию</p>
              </div>
              
              <div className="comparison-grid">
                <div className="comparison-item comparison-nutritionist">
                  <h4>Нутрициолог</h4>
                  <ul>
                    <li><CheckCircle size={16} />Работает со здоровыми людьми</li>
                    <li><CheckCircle size={16} />Индивидуальный подход</li>
                    <li><CheckCircle size={16} />Без диет и ограничений</li>
                    <li><CheckCircle size={16} />Формирует привычки</li>
                    <li><CheckCircle size={16} />Работает с причинами</li>
                  </ul>
                </div>
                
                <div className="comparison-item comparison-dietitian">
                  <h4>Диетолог</h4>
                  <ul>
                    <li><Stethoscope size={16} />Работает с заболеваниями</li>
                    <li><Salad size={16} />Стандартные диеты</li>
                    <li><X size={16} />Жесткие ограничения</li>
                    <li><Clock size={16} />Краткосрочные результаты</li>
                    <li><Stethoscope size={16} />Лечение симптомов</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key principles */}
          <div className="nutrition-principles">
            <h3 className="principles-title">Принципы моей работы</h3>
            <div className="principles-grid">
              {differences.map((item, index) => (
                <div key={index} className="principle-card">
                  <div className="principle-icon">
                    {item.icon}
                  </div>
                  <div className="principle-content">
                    <h4 className="principle-title">{item.title}</h4>
                    <p className="principle-description">{item.description}</p>
                    <span className="principle-highlight">{item.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="nutrition-cta-modern">
          <div className="cta-background">
            <div className="cta-gradient-orb cta-orb-1"></div>
            <div className="cta-gradient-orb cta-orb-2"></div>
            <div className="cta-gradient-orb cta-orb-3"></div>
          </div>
          
          <div className="cta-content-modern">
            <div className="cta-badge">
              <Sparkles size={20} />
              <span>Бесплатная предварительная консультация</span>
            </div>
            
            <h3>Готовы начать путь к здоровому питанию?</h3>
            <p>Узнайте, как наладить питание без диет и ограничений. Первая консультация — бесплатно!</p>
            
            <div className="cta-features-mini">
              <div className="cta-feature-mini">
                <CheckCircle size={16} />
                <span>Без диет</span>
              </div>
              <div className="cta-feature-mini">
                <CheckCircle size={16} />
                <span>Индивидуально</span>
              </div>
              <div className="cta-feature-mini">
                <CheckCircle size={16} />
                <span>Результативно</span>
              </div>
            </div>
            
            <div className="cta-buttons-modern">
              <Link to="/contacts" className="btn-modern btn-modern-primary">
                <span>Записаться на консультацию</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-modern btn-modern-secondary">
                <span>О специалисте</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNutrition;

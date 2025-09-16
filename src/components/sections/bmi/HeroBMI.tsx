import React from 'react';
import { Calculator, TrendingUp, Target } from 'lucide-react';

const HeroBMI: React.FC = () => {
  return (
    <section className="bmi-hero">
      <div className="container">
        <div className="bmi-hero-content">
          <div className="bmi-hero-text">
            <h1 className="bmi-hero-title">
              Калькулятор <span className="text-orange">ИМТ</span>
            </h1>
            
            <p className="bmi-hero-subtitle">
              Рассчитайте свой индекс массы тела и получите персональные рекомендации 
              от профессионального нутрициолога. Узнайте, соответствует ли ваш вес норме, 
              и получите план действий для достижения здорового веса.
            </p>

            <div className="bmi-hero-features">
              <div className="bmi-hero-feature">
                <Calculator className="bmi-hero-feature-icon" />
                <div className="bmi-hero-feature-text">
                  <h3>Точный расчет</h3>
                  <p>Мгновенный расчет ИМТ по международным стандартам</p>
                </div>
              </div>
              
              <div className="bmi-hero-feature">
                <Target className="bmi-hero-feature-icon" />
                <div className="bmi-hero-feature-text">
                  <h3>Персональные рекомендации</h3>
                  <p>Индивидуальные советы для каждой категории ИМТ</p>
                </div>
              </div>
              
              <div className="bmi-hero-feature">
                <TrendingUp className="bmi-hero-feature-icon" />
                <div className="bmi-hero-feature-text">
                  <h3>План действий</h3>
                  <p>Конкретные шаги для достижения здорового веса</p>
                </div>
              </div>
              
            </div>

            <div className="bmi-hero-stats">
              <div className="bmi-hero-stat">
                <div className="bmi-hero-stat-number">95%</div>
                <div className="bmi-hero-stat-label">точность расчета</div>
              </div>
              <div className="bmi-hero-stat">
                <div className="bmi-hero-stat-number">2+</div>
                <div className="bmi-hero-stat-label">года опыта</div>
              </div>
              <div className="bmi-hero-stat">
                <div className="bmi-hero-stat-number">№1</div>
                <div className="bmi-hero-stat-label">в Мичуринске</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="bmi-hero-bg-elements">
        <div className="bmi-hero-bg-circle bmi-hero-bg-circle-1"></div>
        <div className="bmi-hero-bg-circle bmi-hero-bg-circle-2"></div>
        <div className="bmi-hero-bg-circle bmi-hero-bg-circle-3"></div>
      </div>
    </section>
  );
};

export default HeroBMI;


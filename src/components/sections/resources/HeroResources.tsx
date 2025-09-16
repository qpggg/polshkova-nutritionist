import React from 'react';
import { Calculator, BookOpen, ChefHat, Download } from 'lucide-react';

const HeroResources: React.FC = () => {
  return (
    <section className="resources-hero">
      <div className="container">
        <div className="resources-hero-content">
          <div className="resources-hero-text">
            <h1 className="resources-hero-title">
              <span className="text-orange">Полезные</span> материалы
            </h1>
            
            <p className="resources-hero-subtitle">
              Инструменты, статьи и рецепты для поддержания здорового образа жизни. 
              Всё необходимое для самостоятельного контроля питания и здоровья.
            </p>

            <div className="resources-hero-features">
              <div className="resources-hero-feature">
                <Calculator className="resources-hero-feature-icon" />
                <div className="resources-hero-feature-text">
                  <h3>ИМТ калькулятор</h3>
                  <p>Рассчитайте ваш индекс массы тела</p>
                </div>
              </div>
              
              <div className="resources-hero-feature">
                <BookOpen className="resources-hero-feature-icon" />
                <div className="resources-hero-feature-text">
                  <h3>Полезные статьи</h3>
                  <p>Экспертные знания о питании</p>
                </div>
              </div>
              
              <div className="resources-hero-feature">
                <ChefHat className="resources-hero-feature-icon" />
                <div className="resources-hero-feature-text">
                  <h3>Здоровые рецепты</h3>
                  <p>Вкусные и полезные блюда</p>
                </div>
              </div>
              
              <div className="resources-hero-feature">
                <Download className="resources-hero-feature-icon" />
                <div className="resources-hero-feature-text">
                  <h3>Чек-листы</h3>
                  <p>Скачивайте полезные материалы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="resources-hero-bg-elements">
        <div className="resources-hero-bg-circle resources-hero-bg-circle-1"></div>
        <div className="resources-hero-bg-circle resources-hero-bg-circle-2"></div>
        <div className="resources-hero-bg-circle resources-hero-bg-circle-3"></div>
      </div>
    </section>
  );
};

export default HeroResources;



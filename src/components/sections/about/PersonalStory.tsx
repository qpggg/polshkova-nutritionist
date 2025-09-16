import React from 'react';
import { Coffee, Heart, Star, ArrowRight } from 'lucide-react';

const PersonalStory: React.FC = () => {
  return (
    <section className="section section-alt personal-story">
      <div className="container">
        <div className="personal-story-content">
          <div className="personal-story-text">
            <h2 className="section-title">
              Почему я стала <span className="text-orange">нутрициологом</span>?
            </h2>
            
            <div className="story-timeline">
              <div className="story-item">
                <div className="story-marker">
                  <Coffee className="story-icon" />
                </div>
                <div className="story-content">
                  <h3 className="story-title">Личный опыт</h3>
                  <p className="story-description">
                    Сама столкнулась с проблемами пищеварения и усталости. 
                    Перепробовала множество диет, но только понимание основ 
                    нутрициологии помогло мне наладить здоровье.
                  </p>
                </div>
              </div>

              <div className="story-item">
                <div className="story-marker">
                  <Heart className="story-icon" />
                </div>
                <div className="story-content">
                  <h3 className="story-title">Желание помочь</h3>
                  <p className="story-description">
                    Поняла, что хочу помогать другим людям избежать моих ошибок 
                    и найти свой путь к здоровому питанию без мучений и ограничений.
                  </p>
                </div>
              </div>

              <div className="story-item">
                <div className="story-marker">
                  <Star className="story-icon" />
                </div>
                <div className="story-content">
                  <h3 className="story-title">Профессиональный рост</h3>
                  <p className="story-description">
                    Получила качественное образование и теперь помогаю людям 
                    в Мичуринске и по всей России наладить правильное питание.
                  </p>
                </div>
              </div>
            </div>

            <div className="story-cta">
              <p className="story-cta-text">
                Хотите узнать, как я могу помочь именно вам?
              </p>
              <a href="/contacts" className="btn btn-primary">
                Записаться на консультацию
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="personal-story-image">
            <div className="personal-story-image-container">
              <img
                src="/images/kitchen.png"
                alt="Современная кухня с полезными продуктами - основа здорового питания"
                className="personal-story-img"
              />
              <div className="personal-story-badges">
                <div className="personal-story-badge personal-story-badge-1">
                  <Heart className="badge-icon" />
                  <span>С заботой</span>
                </div>
                <div className="personal-story-badge personal-story-badge-2">
                  <Star className="badge-icon" />
                  <span>С опытом</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;

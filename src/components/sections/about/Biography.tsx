import React from 'react';
import { Calendar, MapPin, BookOpen } from 'lucide-react';

const Biography: React.FC = () => {
  return (
    <section className="section biography">
      <div className="container">
        <div className="biography-content">
          <div className="biography-text">
            <h2 className="section-title">
              Моя <span className="text-orange">история</span>
            </h2>
            
            <div className="biography-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Calendar className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">2022 год</h3>
                  <p className="timeline-description">
                    Получила диплом о профессиональной переподготовке по нутрициологии. 
                    Это стало поворотным моментом в моей жизни, когда я поняла, что хочу 
                    помогать людям через правильное питание.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <BookOpen className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">2023 год</h3>
                  <p className="timeline-description">
                    Прошла дополнительное обучение по детской нутрициологии и получила 
                    сертификат. Начала консультировать семьи с детьми, помогая формировать 
                    здоровые пищевые привычки с раннего возраста.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <MapPin className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">2024 год</h3>
                  <p className="timeline-description">
                    Стала первым и единственным дипломированным нутрициологом в Мичуринске. 
                    Начала проводить онлайн-консультации для жителей всей России, 
                    помогая людям наладить питание без диет и ограничений.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="biography-image">
            <div className="biography-image-container">
              <img
                src="/images/family.png"
                alt="Нутрициолог с семьей - здоровый образ жизни"
                className="biography-img"
              />
              <div className="biography-quote">
                <blockquote>
                  "Правильное питание — это не диета, а образ жизни, 
                  который приносит радость и здоровье"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;


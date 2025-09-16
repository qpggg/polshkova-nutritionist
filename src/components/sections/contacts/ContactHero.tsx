import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1 className="contact-hero-title">
              Свяжитесь <span className="text-orange">со мной</span>
            </h1>
            
            <p className="contact-hero-subtitle">
              Готова ответить на ваши вопросы и помочь составить индивидуальный план питания. 
              Выберите удобный способ связи или оставьте заявку через форму.
            </p>

            <div className="contact-hero-features">
              <div className="contact-hero-feature">
                <Phone className="contact-hero-feature-icon" />
                <div className="contact-hero-feature-text">
                  <h3>Быстрый ответ</h3>
                  <p>Отвечаю в течение 2 часов в рабочее время</p>
                </div>
              </div>
              
              <div className="contact-hero-feature">
                <Mail className="contact-hero-feature-icon" />
                <div className="contact-hero-feature-text">
                  <h3>Персональный подход</h3>
                  <p>Индивидуальные рекомендации для каждого клиента</p>
                </div>
              </div>
              
              <div className="contact-hero-feature">
                <MapPin className="contact-hero-feature-icon" />
                <div className="contact-hero-feature-text">
                  <h3>Онлайн и очно</h3>
                  <p>Консультации в Мичуринске и по всей России</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact-hero-bg-elements">
        <div className="contact-hero-bg-circle contact-hero-bg-circle-1"></div>
        <div className="contact-hero-bg-circle contact-hero-bg-circle-2"></div>
        <div className="contact-hero-bg-circle contact-hero-bg-circle-3"></div>
      </div>
    </section>
  );
};

export default ContactHero;

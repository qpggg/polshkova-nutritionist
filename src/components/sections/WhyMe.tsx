import React from 'react';
import { MapPin, Monitor, Ban } from 'lucide-react';

const WhyMe: React.FC = () => {
  const advantages = [
    {
      icon: <MapPin size={32} />,
      title: 'Единственный в Мичуринске',
      description: 'Первый и единственный дипломированный нутрициолог в городе с профессиональным образованием',
      highlight: 'Уникальность'
    },
    {
      icon: <Monitor size={32} />,
      title: 'Работаю онлайн по России',
      description: 'Консультирую клиентов из любого региона России через современные платформы',
      highlight: 'Доступность'
    },
    {
      icon: <Ban size={32} />,
      title: 'Без диет и ограничений',
      description: 'Мой подход основан на формировании здоровых привычек, а не на жестких запретах',
      highlight: 'Комфорт'
    }
  ];


  return (
    <section className="section why-me">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Почему выбирают <span className="text-orange">именно меня</span>?
          </h2>
          <p className="section-subtitle">
            Уникальные преимущества работы с единственным нутрициологом в Мичуринске
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">
                {advantage.icon}
              </div>
              <div className="advantage-content">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
                <span className="advantage-highlight">{advantage.highlight}</span>
              </div>
            </div>
          ))}
        </div>


        <div className="testimonial-preview">
          <blockquote className="testimonial-quote">
            "Благодаря работе с нутрициологом я наконец-то нормализовала вес без диет и голодания. 
            Результат держится уже полгода, и я чувствую себя прекрасно!"
          </blockquote>
          <cite className="testimonial-author">— Анна, 34 года, Мичуринск</cite>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;

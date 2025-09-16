import React from 'react';
import { UserCheck, Search, Utensils, BookOpen } from 'lucide-react';

const Philosophy: React.FC = () => {
  const principles = [
    {
      icon: <UserCheck className="principle-icon" />,
      title: 'Индивидуальный подход',
      description: 'Каждый человек уникален. Я учитываю ваши особенности, образ жизни, предпочтения и цели при составлении рекомендаций.'
    },
    {
      icon: <Search className="principle-icon" />,
      title: 'Работа с причинами',
      description: 'Не лечу симптомы, а ищу и устраняю корневые причины проблем с питанием и здоровьем.'
    },
    {
      icon: <Utensils className="principle-icon" />,
      title: 'Без диет и ограничений',
      description: 'Помогаю наладить питание так, чтобы оно было комфортным, вкусным и приносило удовольствие.'
    },
    {
      icon: <BookOpen className="principle-icon" />,
      title: 'Образование клиентов',
      description: 'Учу понимать свой организм, чтобы вы могли самостоятельно поддерживать здоровое питание.'
    }
  ];

  return (
    <section className="section philosophy">
      <div className="container">
        <div className="philosophy-content">
          <div className="philosophy-text">
            <h2 className="section-title">
              Моя <span className="text-orange">философия</span> работы
            </h2>
            
            <div className="philosophy-intro">
              <p className="philosophy-intro-text">
                Я верю, что правильное питание — это не временная диета, а образ жизни, 
                который должен приносить радость и энергию. Моя задача — помочь вам 
                найти баланс между здоровьем и удовольствием от еды.
              </p>
            </div>

            <div className="principles-grid">
              {principles.map((principle, index) => (
                <div key={index} className="principle-card">
                  <div className="principle-card-header">
                    {principle.icon}
                    <h3 className="principle-title">{principle.title}</h3>
                  </div>
                  <p className="principle-description">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="philosophy-image">
            <div className="philosophy-image-container">
              <img
                src="/images/nutritionist-vitamins.png"
                alt="Витамины и минералы - основа здорового питания"
                className="philosophy-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

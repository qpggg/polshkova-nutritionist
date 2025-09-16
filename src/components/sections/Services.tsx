import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, FileText, Baby, Activity, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Services: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const services = [
    {
      icon: <User size={24} />,
      title: 'Индивидуальные консультации',
      description: 'Персональная работа по решению ваших задач с питанием',
      features: ['Анализ текущего рациона', 'Выявление проблем', 'Индивидуальные рекомендации'],
      duration: '1 час',
      price: 'от 2500 ₽',
      link: '/services/consultation'
    },
    {
      icon: <FileText size={24} />,
      title: 'Планы питания + КБЖУ',
      description: 'Составление сбалансированного рациона с расчетом калорий',
      features: ['Персональный план питания', 'Расчет КБЖУ', 'Список продуктов'],
      duration: '3-5 дней',
      price: 'от 3000 ₽',
      link: '/services/nutrition-plans'
    },
    {
      icon: <Baby size={24} />,
      title: 'Детская нутрициология',
      description: 'Формирование здоровых привычек питания у детей',
      features: ['Введение прикорма', 'Детский рацион', 'Работа с родителями'],
      duration: '1 час',
      price: 'от 2800 ₽',
      link: '/services/children'
    },
    {
      icon: <Activity size={24} />,
      title: 'При заболеваниях',
      description: 'Коррекция питания при различных заболеваниях',
      features: ['ЖКТ проблемы', 'Диабет', 'Аутоиммунные заболевания'],
      duration: '1.5 часа',
      price: 'от 3500 ₽',
      link: '/services/diseases'
    },
    {
      icon: <Users size={24} />,
      title: 'Лекции и вебинары',
      description: 'Групповые программы обучения здоровому питанию',
      features: ['Онлайн лекции', 'Групповые консультации', 'Образовательные программы'],
      duration: '1-2 часа',
      price: 'от 1500 ₽',
      link: '/services/lectures'
    }
  ];

  return (
    <section className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Основные <span className="text-orange">услуги</span>
          </h2>
          <p className="section-subtitle">
            Предлагаю комплексный подход к нормализации питания. 
            Все консультации проходят онлайн, что позволяет работать 
            с клиентами по всей России.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${expandedCards.includes(index) ? 'expanded' : ''}`}>
              <div 
                className="service-header"
                onClick={() => toggleCard(index)}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-toggle">
                  {expandedCards.includes(index) ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </div>

              <div className={`service-features ${expandedCards.includes(index) ? 'expanded' : ''}`}>
                <h4>Что включено:</h4>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={`service-details ${expandedCards.includes(index) ? 'expanded' : ''}`}>
                <div className="service-meta">
                  <span className="service-duration">Длительность: {service.duration}</span>
                  <span className="service-price">{service.price}</span>
                </div>
                <Link to={service.link} className="service-link">
                  Подробнее <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Не знаете, какая услуга вам подходит?</h3>
            <p>Запишитесь на бесплатную консультацию, и мы определим оптимальный план работы</p>
            <Link to="/contacts" className="btn btn-primary">
              Получить консультацию
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

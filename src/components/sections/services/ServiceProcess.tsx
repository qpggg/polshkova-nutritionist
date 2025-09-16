import React from 'react';
import { MessageCircle, FileText, Calendar, TrendingUp } from 'lucide-react';

const ServiceProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageCircle size={28} />,
      title: 'Первичная консультация',
      description: 'Обсуждаем ваши цели, анализируем текущее питание и образ жизни. Выявляем проблемные зоны и определяем приоритеты.',
      duration: '30-60 мин'
    },
    {
      number: '02',
      icon: <FileText size={28} />,
      title: 'Разработка плана',
      description: 'Создаю индивидуальный план питания с учетом ваших предпочтений, режима дня и особенностей организма.',
      duration: '3-5 дней'
    },
    {
      number: '03',
      icon: <Calendar size={28} />,
      title: 'Сопровождение',
      description: 'Поддерживаю вас на всем пути: отвечаю на вопросы, корректирую план, мотивирую и направляю.',
      duration: 'Постоянно'
    },
    {
      number: '04',
      icon: <TrendingUp size={28} />,
      title: 'Достижение результата',
      description: 'Анализируем прогресс, закрепляем новые привычки и формируем устойчивый образ жизни.',
      duration: '1-3 месяца'
    }
  ];

  return (
    <section className="service-process">
      <div className="container">
        <div className="service-process-header">
          <h2 className="section-title">
            Как мы <span className="text-orange">работаем</span>?
          </h2>
          <p className="section-subtitle">
            Пошаговый процесс, который приведет вас к результату. 
            Каждый этап продуман для максимальной эффективности.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-step-number">
                <span>{step.number}</span>
              </div>
              
              <div className="process-step-content">
                <div className="process-step-header">
                  <div className="process-step-icon">
                    {step.icon}
                  </div>
                  <div className="process-step-title-group">
                    <h3 className="process-step-title">{step.title}</h3>
                    <div className="process-step-duration">{step.duration}</div>
                  </div>
                </div>
                
                <p className="process-step-description">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="process-step-connector"></div>
              )}
            </div>
          ))}
        </div>

        <div className="process-cta">
          <div className="process-cta-content">
            <h3>Готовы начать путь к здоровому питанию?</h3>
            <p>Запишитесь на первичную консультацию и получите персональный план питания</p>
            <button className="btn btn-primary btn-lg">
              Записаться на консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;



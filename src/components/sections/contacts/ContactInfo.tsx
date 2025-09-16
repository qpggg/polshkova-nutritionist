import React from 'react';
import { Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: 'Телефон',
      value: '+7 915 672 07 03',
      description: 'Звонки и WhatsApp',
      action: 'tel:+79156720703',
      color: 'green'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'tanya.polshkova.75@mail.ru',
      description: 'Письменные консультации',
      action: 'mailto:tanya.polshkova.75@mail.ru',
      color: 'blue'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      value: '+7 915 672 07 03',
      description: 'Быстрые сообщения',
      action: 'https://wa.me/79156720703',
      color: 'green'
    },
    {
      icon: <Send size={24} />,
      title: 'Telegram',
      value: '@nutritionist_michurinsk',
      description: 'Канал с советами',
      action: 'https://t.me/nutritionist_michurinsk',
      color: 'blue'
    }
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', time: '9:00 - 18:00' },
    { day: 'Суббота', time: '10:00 - 16:00' },
    { day: 'Воскресенье', time: 'По договоренности' }
  ];

  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="contact-info-header">
          <h2 className="section-title">
            <Phone className="section-title-icon" />
            Контактная <span className="text-orange">информация</span>
          </h2>
          <p className="section-subtitle">
            Выберите удобный способ связи. Отвечаю быстро и всегда готова помочь!
          </p>
        </div>

        <div className="contact-info-content">
          <div className="contact-methods">
            <h3>Способы связи</h3>
            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className={`contact-method-card contact-method-${method.color}`}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-method-icon">
                    {method.icon}
                  </div>
                  <div className="contact-method-content">
                    <h4>{method.title}</h4>
                    <p className="contact-method-value">{method.value}</p>
                    <span className="contact-method-description">{method.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="working-hours">
            <h3>График работы</h3>
            <div className="working-hours-card">
              <div className="working-hours-header">
                <Clock className="working-hours-icon" />
                <h4>Время приема</h4>
              </div>
              <div className="working-hours-list">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="working-hours-item">
                    <span className="working-hours-day">{schedule.day}</span>
                    <span className="working-hours-time">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="working-hours-note">
                <p>
                  <strong>Важно:</strong> Консультации проводятся по предварительной записи. 
                  Вне рабочего времени отвечаю на сообщения в течение 24 часов.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;

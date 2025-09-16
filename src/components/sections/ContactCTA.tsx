import React, { useState } from 'react';
import { Send, Phone, MessageCircle, Clock, CheckCircle, User, Mail } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  age: string;
  problem: string;
  message: string;
}

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    age: '',
    problem: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const problems = [
    'Нормализация веса',
    'Проблемы с ЖКТ',
    'Сахарный диабет',
    'Аутоиммунные заболевания',
    'Детское питание',
    'Общее улучшение здоровья',
    'Другое'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = (data: FormData) => {
    const message = `Новая заявка на консультацию

Имя: ${data.name}
Телефон: ${data.phone}
Email: ${data.email || 'tanya.polshkova.75@mail.ru'}
Возраст: ${data.age}
Проблема: ${data.problem}
Сообщение: ${data.message}

Хочу записаться на консультацию к нутрициологу`;

    try {
      const encodedMessage = encodeURIComponent(message);
      const telegramUrl = `https://t.me/nutritionist_michurinsk?text=${encodedMessage}`;
      
      // Пробуем открыть Telegram
      const newWindow = window.open(telegramUrl, '_blank');
      
      // Если не удалось открыть, показываем альтернативу
      if (!newWindow) {
        alert('Не удалось открыть Telegram. Перейдите по ссылке: https://t.me/nutritionist_michurinsk');
      }
    } catch (error) {
      console.error('Ошибка при отправке в Telegram:', error);
      alert('Не удалось открыть Telegram. Перейдите по ссылке: https://t.me/nutritionist_michurinsk');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Отправляем данные в Telegram
    sendToTelegram(formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      value: 'Написать сообщение',
      action: 'https://wa.me/79156720703',
      description: 'Быстрый ответ в любое время'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'tanya.polshkova.75@mail.ru',
      action: 'mailto:tanya.polshkova.75@mail.ru',
      description: 'Подробная консультация по почте'
    }
  ];

  if (isSubmitted) {
    return (
      <section className="section contact-cta">
        <div className="container">
          <div className="success-message">
            <CheckCircle size={64} className="success-icon" />
            <h2>Спасибо за обращение!</h2>
            <p>Ваша заявка отправлена в Telegram! Я свяжусь с вами в ближайшее время для уточнения деталей консультации.</p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '', phone: '', email: '', age: '', problem: '', message: ''
                });
              }}
              className="btn btn-outline"
            >
              Отправить еще одну заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact-cta">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Готовы начать путь к <span className="text-orange">здоровому питанию</span>?
          </h2>
          <p className="section-subtitle">
            Заполните форму ниже, и я свяжусь с вами для бесплатной предварительной консультации
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Записаться на консультацию</h3>
              <p>Все поля обязательны для заполнения</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User size={18} />
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age" className="form-label">
                    Возраст
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Ваш возраст"
                    min="1"
                    max="120"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <Phone size={18} />
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail size={18} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="problem" className="form-label">
                  Основная проблема
                </label>
                <select
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Выберите проблему</option>
                  {problems.map((problem) => (
                    <option key={problem} value={problem}>
                      {problem}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Дополнительная информация
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Расскажите подробнее о вашей ситуации..."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Записаться на консультацию
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-methods">
            <h3>Другие способы связи</h3>
            
            {/* Объединенная кнопка с номером телефона */}
            <a
              href="tel:+79156720703"
              className="phone-cta-button"
            >
              <Phone size={24} />
              <span className="phone-number">+7 915 672 07 03</span>
            </a>

            <div className="methods-list">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="method-card"
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="method-icon">
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                    <span>{method.description}</span>
                  </div>
                </a>
              ))}
              
              <div className="schedule-info method-card">
                <div className="method-icon">
                  <Clock size={24} className="text-white" />
                </div>
                <div className="method-content">
                  <h4>График работы</h4>
                  <p>Понедельник - Пятница: 9:00 - 18:00</p>
                  <span>Суббота - Воскресенье: по договоренности</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

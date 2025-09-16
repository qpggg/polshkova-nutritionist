import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Phone, Calendar } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'phone'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = (data: typeof formData) => {
    const message = `Новая заявка с сайта

Имя: ${data.name}
Телефон: ${data.phone}
Email: ${data.email || 'tanya.polshkova.75@mail.ru'}
Услуга: ${data.service}
Сообщение: ${data.message}
Способ связи: ${data.preferredContact === 'phone' ? 'Телефон' : data.preferredContact === 'email' ? 'Email' : 'Telegram'}

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
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'phone'
      });
    }, 3000);
  };

  const services = [
    'Первичная консультация',
    'План питания',
    'Детская нутрициология',
    'При заболеваниях',
    'Лекции и вебинары'
  ];

  if (isSubmitted) {
    return (
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-success">
            <div className="success-icon">
              <Send className="success-icon-svg" />
            </div>
            <h2>Спасибо за обращение!</h2>
            <p>Ваша заявка отправлена в Telegram! Я свяжусь с вами в ближайшее время.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-header">
          <h2 className="section-title">
            <MessageSquare className="section-title-icon" />
            Оставьте <span className="text-orange">заявку</span>
          </h2>
          <p className="section-subtitle">
            Заполните форму, и я свяжусь с вами для обсуждения ваших целей и составления 
            индивидуального плана питания.
          </p>
        </div>

        <div className="contact-form-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <User size={20} />
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Mail size={20} />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <Phone size={20} />
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Calendar size={20} />
                  Услуга
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Выберите услугу</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                <MessageSquare size={20} />
                Сообщение *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Расскажите о ваших целях, проблемах со здоровьем или вопросах по питанию..."
                rows={5}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Предпочитаемый способ связи</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-custom"></span>
                  <Phone size={16} />
                  Телефон
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-custom"></span>
                  <Mail size={16} />
                  Email
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    checked={formData.preferredContact === 'whatsapp'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-custom"></span>
                  <MessageSquare size={16} />
                  WhatsApp
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg contact-form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Отправляем...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Отправить заявку
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

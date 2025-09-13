import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  text: string;
  rating: number;
  problem: string;
  result: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Елена Смирнова',
      age: 32,
      location: 'Мичуринск',
      text: 'Я наконец-то научилась есть правильно без постоянного чувства вины! За 3 месяца работы удалось нормализовать вес и улучшить пищеварение. Никаких диет и ограничений - только здоровые привычки.',
      rating: 5,
      problem: 'Проблемы с весом',
      result: 'Минус 8 кг за 3 месяца'
    },
    {
      id: 2,
      name: 'Мария Петрова',
      age: 28,
      location: 'Тамбов',
      text: 'Работали над детским питанием для моей дочки. Специалист помогла составить полноценный рацион и научила, как правильно вводить новые продукты. Ребенок стал лучше есть и меньше болеть.',
      rating: 5,
      problem: 'Детское питание',
      result: 'Улучшение аппетита у ребенка'
    },
    {
      id: 3,
      name: 'Анна Козлова',
      age: 45,
      location: 'Воронеж',
      text: 'У меня был гастрит, и я боялась есть многие продукты. Нутрициолог составила индивидуальный план питания, учитывающий мои проблемы. Через 2 месяца симптомы почти исчезли!',
      rating: 5,
      problem: 'Проблемы с ЖКТ',
      result: 'Исчезли симптомы гастрита'
    },
    {
      id: 4,
      name: 'Дарья Иванова',
      age: 35,
      location: 'Липецк',
      text: 'Консультации проходили онлайн, что очень удобно. Получила не только план питания, но и понимание, как работает мой организм. Энергии стало больше, настроение улучшилось.',
      rating: 5,
      problem: 'Упадок сил',
      result: 'Повышение энергии'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="section section-alt testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Отзывы <span className="text-orange">клиентов</span>
          </h2>
          <p className="section-subtitle">
            Реальные истории людей, которые изменили свою жизнь к лучшему
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <span>{current.name.charAt(0)}</span>
              </div>
              <div className="testimonial-info">
                <h3 className="testimonial-name">{current.name}</h3>
                <p className="testimonial-details">{current.age} лет, {current.location}</p>
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < current.rating ? "currentColor" : "none"}
                      className="star"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="testimonial-content">
              <Quote className="testimonial-quote-icon" size={32} />
              <blockquote className="testimonial-text">
                {current.text}
              </blockquote>
            </div>

            <div className="testimonial-results">
              <div className="result-item">
                <span className="result-label">Проблема:</span>
                <span className="result-value">{current.problem}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Результат:</span>
                <span className="result-value">{current.result}</span>
              </div>
            </div>
          </div>

          <div className="testimonials-controls">
            <button 
              onClick={prevTestimonial}
              className="control-button"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="control-button"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Качество работы</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Года помогаю людям</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">№1</span>
            <span className="stat-label">Нутрициолог в городе</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

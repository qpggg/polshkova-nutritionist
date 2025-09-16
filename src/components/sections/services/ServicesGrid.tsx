import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  Baby, 
  Stethoscope, 
  Users, 
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      id: 'individual',
      icon: <User size={28} />,
      title: 'Индивидуальные консультации',
      description: 'Персональный план питания с учетом ваших особенностей, целей и образа жизни',
      features: [
        'Анализ текущего рациона',
        'Разработка индивидуального плана',
        'Корректировка привычек питания',
        'Постоянная поддержка'
      ],
      duration: '60-90 минут',
      format: 'Онлайн/офлайн',
      color: 'orange'
    },
    {
      id: 'meal-plan',
      icon: <Calendar size={28} />,
      title: 'Составление рационов питания',
      description: 'Готовые меню на неделю или месяц с рецептами и списками покупок',
      features: [
        'Недельное/месячное меню',
        'Подробные рецепты',
        'Списки покупок',
        'Расчет КБЖУ'
      ],
      duration: '3-5 дней',
      format: 'Документ',
      color: 'green'
    },
    {
      id: 'child-nutrition',
      icon: <Baby size={28} />,
      title: 'Детское питание',
      description: 'Специализированные программы питания для детей всех возрастов',
      features: [
        'Питание от 6 месяцев до 18 лет',
        'Введение прикорма',
        'Рацион для школьников',
        'Работа с пищевыми капризами'
      ],
      duration: '45-60 минут',
      format: 'С родителями',
      color: 'orange'
    },
    {
      id: 'medical-nutrition',
      icon: <Stethoscope size={28} />,
      title: 'Питание при заболеваниях',
      description: 'Коррекция рациона при различных заболеваниях и состояниях',
      features: [
        'Заболевания ЖКТ',
        'Сахарный диабет',
        'Сердечно-сосудистые заболевания',
        'Аллергии и непереносимость'
      ],
      duration: '60-90 минут',
      format: 'Комплексный подход',
      color: 'green'
    }
  ];

  return (
    <section className="services-grid-section">
      <div className="container">
        <div className="services-grid-header">
          <h2 className="section-title">
            Все мои <span className="text-orange">услуги</span>
          </h2>
          <p className="section-subtitle">
            Выберите подходящий формат работы. Все консультации проводятся 
            с индивидуальным подходом и профессиональной поддержкой.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card service-card-${service.color}`}
            >
              <div className="service-card-header">
                <div className={`service-icon service-icon-${service.color}`}>
                  {service.icon}
                </div>
                <div className="service-header-text">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>

              <div className="service-features">
                <h4 className="service-features-title">Что включено:</h4>
                <ul className="service-features-list">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature">
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-details">
                <div className="service-detail">
                  <Clock size={16} />
                  <span>{service.duration}</span>
                </div>
                <div className="service-detail">
                  <Users size={16} />
                  <span>{service.format}</span>
                </div>
              </div>

              <div className="service-card-footer">
                <Link 
                  to="/contacts" 
                  className={`service-cta service-cta-${service.color}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span>Записаться</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

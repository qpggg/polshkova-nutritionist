import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, AlertCircle, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

const BMIInfo: React.FC = () => {
  const bmiCategories = [
    {
      range: 'Менее 18.5',
      category: 'Недостаточный вес',
      color: 'gray',
      description: 'Может указывать на недостаток питания или проблемы со здоровьем',
      recommendations: [
        'Увеличить калорийность рациона',
        'Добавить белковые продукты',
        'Включить полезные жиры',
        'Консультация с врачом'
      ]
    },
    {
      range: '18.5 - 24.9',
      category: 'Нормальный вес',
      color: 'green',
      description: 'Оптимальный диапазон для большинства людей',
      recommendations: [
        'Поддерживать сбалансированное питание',
        'Регулярная физическая активность',
        'Контроль веса',
        'Здоровый образ жизни'
      ]
    },
    {
      range: '25.0 - 29.9',
      category: 'Избыточный вес',
      color: 'orange',
      description: 'Повышенный риск развития заболеваний',
      recommendations: [
        'Снижение калорийности рациона',
        'Увеличение физической активности',
        'Контроль порций',
        'Консультация с нутрициологом'
      ]
    },
    {
      range: '30 и выше',
      category: 'Ожирение',
      color: 'red',
      description: 'Высокий риск серьезных проблем со здоровьем',
      recommendations: [
        'Комплексная программа снижения веса',
        'Медицинское наблюдение',
        'Индивидуальный план питания',
        'Постепенное изменение образа жизни'
      ]
    }
  ];

  const healthTips = [
    {
      icon: <Heart size={24} />,
      title: 'Здоровое питание',
      description: 'Сбалансированный рацион с достаточным количеством белков, жиров и углеводов'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Регулярная активность',
      description: 'Физические упражнения помогают поддерживать здоровый вес'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Контроль веса',
      description: 'Регулярное отслеживание веса помогает вовремя заметить изменения'
    }
  ];

  return (
    <section className="bmi-info-section">
      <div className="container">
        <div className="bmi-info-header">
          <h2 className="section-title">
            Понимание <span className="text-orange">результатов ИМТ</span>
          </h2>
          <p className="section-subtitle">
            Узнайте больше о категориях ИМТ и получите рекомендации для каждого диапазона
          </p>
        </div>

        <div className="bmi-categories">
          {bmiCategories.map((category, index) => (
            <div key={index} className={`bmi-category-card bmi-category-${category.color} expanded`}>
              <div className="bmi-category-header">
                <div className="bmi-category-header-content">
                  <div className={`bmi-category-range bmi-range-${category.color}`}>
                    {category.range}
                  </div>
                  <h3 className="bmi-category-title">{category.category}</h3>
                </div>
              </div>
              
              <div className="bmi-category-content expanded">
                <p className="bmi-category-description">{category.description}</p>
                
                <div className="bmi-category-recommendations">
                  <h4>Рекомендации:</h4>
                  <ul>
                    {category.recommendations.map((rec, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="health-tips-section">
          <h3 className="health-tips-title">Общие рекомендации для здорового веса</h3>
          <div className="health-tips-grid">
            {healthTips.map((tip, index) => (
              <div key={index} className="health-tip-card">
                <div className="health-tip-icon">
                  {tip.icon}
                </div>
                <div className="health-tip-content">
                  <h4 className="health-tip-title">{tip.title}</h4>
                  <p className="health-tip-description">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bmi-disclaimer">
          <div className="bmi-disclaimer-card">
            <div className="bmi-disclaimer-header">
              <AlertCircle className="bmi-disclaimer-icon" />
              <h3>Важная информация</h3>
            </div>
            <div className="bmi-disclaimer-content">
              <p>
                ИМТ является ориентировочным показателем и не учитывает индивидуальные 
                особенности телосложения, мышечную массу, возраст и другие факторы. 
                Для точной оценки состояния здоровья и разработки индивидуального плана 
                питания рекомендуется консультация с квалифицированным специалистом.
              </p>
            </div>
          </div>
        </div>

        <div className="bmi-cta-final">
          <div className="bmi-cta-final-content">
            <h3>Готовы начать путь к здоровому весу?</h3>
            <p>
              Запишитесь на персональную консультацию с нутрициологом и получите 
              индивидуальный план питания, разработанный специально для ваших целей и особенностей.
            </p>
            <div className="bmi-cta-benefits">
              <div className="bmi-cta-benefit">
                <CheckCircle size={20} />
                <span>Индивидуальный подход</span>
              </div>
              <div className="bmi-cta-benefit">
                <CheckCircle size={20} />
                <span>Научно обоснованные методы</span>
              </div>
              <div className="bmi-cta-benefit">
                <CheckCircle size={20} />
                <span>Долгосрочный результат</span>
              </div>
            </div>
            <Link 
              to="/contacts" 
              className="btn btn-primary btn-lg bmi-cta-button"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>Записаться на консультацию</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMIInfo;


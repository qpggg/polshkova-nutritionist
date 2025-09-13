import React from 'react';
import { Scale, Activity, Shield, Baby, Heart, Stethoscope } from 'lucide-react';

const WhoIHelp: React.FC = () => {
  const helpCategories = [
    {
      icon: <Scale size={32} />,
      title: 'Нормализация веса',
      description: 'Помогаю достичь комфортного веса без диет и голодания',
      details: [
        'Индивидуальный расчет калорий',
        'Составление сбалансированного рациона',
        'Работа с пищевыми привычками',
        'Поддержка на всем пути'
      ],
      color: 'orange'
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Проблемы с ЖКТ',
      description: 'Корректируем питание при заболеваниях желудочно-кишечного тракта',
      details: [
        'Гастрит и язвенная болезнь',
        'Синдром раздраженного кишечника',
        'Дисбактериоз',
        'Панкреатит и холецистит'
      ],
      color: 'green'
    },
    {
      icon: <Activity size={32} />,
      title: 'Сахарный диабет',
      description: 'Разработка питания для контроля уровня глюкозы в крови',
      details: [
        'Диабет 1 и 2 типа',
        'Преддиабетическое состояние',
        'Инсулинорезистентность',
        'Гестационный диабет'
      ],
      color: 'orange'
    },
    {
      icon: <Shield size={32} />,
      title: 'Аутоиммунные заболевания',
      description: 'Противовоспалительное питание при аутоиммунных процессах',
      details: [
        'Ревматоидный артрит',
        'Болезнь Крона',
        'Тиреоидит Хашимото',
        'Псориаз и экзема'
      ],
      color: 'green'
    },
    {
      icon: <Baby size={32} />,
      title: 'Детское питание',
      description: 'Формирование здоровых пищевых привычек у детей',
      details: [
        'Введение прикорма',
        'Питание дошкольников',
        'Рацион школьников',
        'Работа с избирательностью в еде'
      ],
      color: 'orange'
    },
    {
      icon: <Heart size={32} />,
      title: 'Общее самочувствие',
      description: 'Улучшение качества жизни через правильное питание',
      details: [
        'Повышение энергии',
        'Улучшение сна',
        'Укрепление иммунитета',
        'Снижение стресса'
      ],
      color: 'green'
    }
  ];

  return (
    <section className="section section-alt who-i-help">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Кому я <span className="text-orange">помогаю</span>?
          </h2>
          <p className="section-subtitle">
            Работаю с людьми любого возраста, которые хотят улучшить свое здоровье 
            и самочувствие через правильное питание. Специализируюсь на работе с 
            различными состояниями и заболеваниями.
          </p>
        </div>

        <div className="help-categories">
          {helpCategories.map((category, index) => (
            <div 
              key={index} 
              className={`help-category-card ${category.color}`}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>
              
              <div className="category-details">
                <h4>Что входит:</h4>
                <ul className="category-list">
                  {category.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Preview */}
        <div className="success-preview">
          <h3 className="success-title">Результаты моих клиентов</h3>
          <div className="success-stats">
            <div className="success-stat">
              <span className="success-number">95%</span>
              <span className="success-label">улучшили самочувствие</span>
            </div>
            <div className="success-stat">
              <span className="success-number">87%</span>
              <span className="success-label">нормализовали вес</span>
            </div>
            <div className="success-stat">
              <span className="success-number">92%</span>
              <span className="success-label">решили проблемы с ЖКТ</span>
            </div>
            <div className="success-stat">
              <span className="success-number">100%</span>
              <span className="success-label">получили персональный план</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="help-cta">
          <div className="cta-box">
            <h3>Узнайте, как я могу помочь именно вам</h3>
            <p>
              Запишитесь на бесплатную 15-минутную консультацию, чтобы обсудить 
              ваши цели и определить план работы
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Записаться на консультацию
              </a>
              <a href="/services" className="btn btn-outline">
                Посмотреть услуги
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIHelp;

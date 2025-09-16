import React from 'react';
import { BookOpen, Clock, ArrowRight, Heart, Utensils, Activity } from 'lucide-react';

const HealthyArticles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Основы правильного питания: с чего начать',
      excerpt: 'Пошаговое руководство для тех, кто хочет наладить здоровое питание без диет и ограничений.',
      readTime: '8 мин',
      category: 'Основы',
      icon: <BookOpen size={24} />,
      color: 'orange'
    },
    {
      id: 2,
      title: 'Как читать этикетки продуктов',
      excerpt: 'Учимся выбирать качественные продукты, понимая состав и пищевую ценность.',
      readTime: '6 мин',
      category: 'Практика',
      icon: <Utensils size={24} />,
      color: 'green'
    },
    {
      id: 3,
      title: 'Питание и энергия: как еда влияет на самочувствие',
      excerpt: 'Разбираемся, почему одни продукты дают энергию, а другие вызывают усталость.',
      readTime: '10 мин',
      category: 'Здоровье',
      icon: <Activity size={24} />,
      color: 'orange'
    },
    {
      id: 4,
      title: 'Витамины и минералы: что важно знать',
      excerpt: 'Полный гид по основным микронутриентам и их влиянию на организм.',
      readTime: '12 мин',
      category: 'Нутриенты',
      icon: <Heart size={24} />,
      color: 'green'
    },
    {
      id: 5,
      title: 'Водный баланс: сколько и когда пить',
      excerpt: 'Все о важности правильного питьевого режима для здоровья и хорошего самочувствия.',
      readTime: '7 мин',
      category: 'Основы',
      icon: <BookOpen size={24} />,
      color: 'orange'
    },
    {
      id: 6,
      title: 'Пищевые привычки: как их изменить',
      excerpt: 'Практические советы по формированию здоровых привычек питания на долгий срок.',
      readTime: '9 мин',
      category: 'Практика',
      icon: <Utensils size={24} />,
      color: 'green'
    }
  ];

  return (
    <section className="healthy-articles-section">
      <div className="container">
        <div className="healthy-articles-header">
          <h2 className="section-title">
            Полезные <span className="text-orange">статьи</span>
          </h2>
          <p className="section-subtitle">
            Экспертные знания о питании, здоровье и формировании правильных пищевых привычек. 
            Изучайте проверенную информацию от профессионального нутрициолога.
          </p>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className={`article-card article-card-${article.color}`}>
              <div className="article-card-header">
                <div className={`article-icon article-icon-${article.color}`}>
                  {article.icon}
                </div>
                <div className="article-meta">
                  <span className={`article-category article-category-${article.color}`}>
                    {article.category}
                  </span>
                  <div className="article-read-time">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
              </div>

              <div className="article-footer">
                <button className={`article-read-btn article-read-btn-${article.color}`}>
                  <span>Читать статью</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="articles-cta">
          <div className="articles-cta-content">
            <h3>Хотите больше персональных рекомендаций?</h3>
            <p>Запишитесь на индивидуальную консультацию и получите план питания, составленный специально для вас</p>
            <button className="btn btn-primary btn-lg">
              Записаться на консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyArticles;



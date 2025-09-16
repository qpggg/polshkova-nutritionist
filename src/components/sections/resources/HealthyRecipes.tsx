import React from 'react';
import { ChefHat, Clock, Users, Star, Download } from 'lucide-react';

const HealthyRecipes: React.FC = () => {
  const recipes = [
    {
      id: 1,
      title: 'Овсяная каша с ягодами и орехами',
      description: 'Питательный завтрак, богатый клетчаткой и антиоксидантами',
      cookTime: '15 мин',
      servings: '2 порции',
      difficulty: 'Легко',
      category: 'Завтрак',
      color: 'orange',
      tags: ['Без глютена', 'Веганский', 'Богато клетчаткой']
    },
    {
      id: 2,
      title: 'Салат с киноа и авокадо',
      description: 'Сбалансированный обед с полным набором аминокислот',
      cookTime: '20 мин',
      servings: '3 порции',
      difficulty: 'Легко',
      category: 'Обед',
      color: 'green',
      tags: ['Суперфуд', 'Белковый', 'Омега-3']
    },
    {
      id: 3,
      title: 'Запеченная рыба с овощами',
      description: 'Полноценный ужин с омега-3 жирными кислотами',
      cookTime: '35 мин',
      servings: '4 порции',
      difficulty: 'Средне',
      category: 'Ужин',
      color: 'orange',
      tags: ['Омега-3', 'Белковый', 'Низкоуглеводный']
    },
    {
      id: 4,
      title: 'Смузи с зеленью и фруктами',
      description: 'Витаминный напиток для укрепления иммунитета',
      cookTime: '5 мин',
      servings: '1 порция',
      difficulty: 'Легко',
      category: 'Напитки',
      color: 'green',
      tags: ['Детокс', 'Витамины', 'Антиоксиданты']
    }
  ];

  const checklists = [
    {
      title: 'Чек-лист здорового питания',
      description: 'Ежедневный план для контроля рациона',
      downloadCount: '1.2k'
    },
    {
      title: 'Список полезных продуктов',
      description: 'Гид по выбору качественных продуктов',
      downloadCount: '850'
    },
    {
      title: 'Планировщик меню на неделю',
      description: 'Шаблон для составления недельного рациона',
      downloadCount: '970'
    }
  ];

  return (
    <section className="healthy-recipes-section">
      <div className="container">
        <div className="healthy-recipes-header">
          <h2 className="section-title">
            Здоровые <span className="text-orange">рецепты</span>
          </h2>
          <p className="section-subtitle">
            Вкусные и полезные рецепты для каждого приема пищи. Все блюда проверены 
            нутрициологом и содержат оптимальный баланс питательных веществ.
          </p>
        </div>

        <div className="recipes-content">
          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <div key={recipe.id} className={`recipe-card recipe-card-${recipe.color}`}>
                <div className="recipe-card-header">
                  <div className={`recipe-category recipe-category-${recipe.color}`}>
                    {recipe.category}
                  </div>
                  <div className="recipe-difficulty">
                    <Star size={16} />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <div className="recipe-content">
                  <h3 className="recipe-title">{recipe.title}</h3>
                  <p className="recipe-description">{recipe.description}</p>

                  <div className="recipe-meta">
                    <div className="recipe-meta-item">
                      <Clock size={16} />
                      <span>{recipe.cookTime}</span>
                    </div>
                    <div className="recipe-meta-item">
                      <Users size={16} />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>

                  <div className="recipe-tags">
                    {recipe.tags.map((tag, index) => (
                      <span key={index} className={`recipe-tag recipe-tag-${recipe.color}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="recipe-footer">
                  <button className={`recipe-btn recipe-btn-${recipe.color}`}>
                    <ChefHat size={18} />
                    <span>Посмотреть рецепт</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checklists-section">
            <h3 className="checklists-title">
              <Download className="checklists-title-icon" />
              Полезные материалы для скачивания
            </h3>
            
            <div className="checklists-grid">
              {checklists.map((checklist, index) => (
                <div key={index} className="checklist-card">
                  <div className="checklist-content">
                    <h4 className="checklist-title">{checklist.title}</h4>
                    <p className="checklist-description">{checklist.description}</p>
                    <div className="checklist-stats">
                      <span>Скачали: {checklist.downloadCount}</span>
                    </div>
                  </div>
                  <button className="checklist-download-btn">
                    <Download size={20} />
                    <span>Скачать PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyRecipes;



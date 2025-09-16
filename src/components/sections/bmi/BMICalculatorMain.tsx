import React, { useState } from 'react';
import { Calculator, Info, AlertCircle } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [recommendation, setRecommendation] = useState<string>('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // конвертируем см в метры

    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBMI(Number(bmiValue.toFixed(1)));
      
      // Определяем категорию и рекомендации
      if (bmiValue < 18.5) {
        setCategory('Недостаточный вес');
        setRecommendation('Рекомендуется увеличить калорийность рациона и добавить белковые продукты. Обратитесь к специалисту для составления плана набора веса.');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Нормальный вес');
        setRecommendation('Отличный результат! Поддерживайте сбалансированное питание и регулярную физическую активность.');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Избыточный вес');
        setRecommendation('Рекомендуется скорректировать рацион и увеличить физическую активность. Консультация с нутрициологом поможет составить индивидуальный план.');
      } else {
        setCategory('Ожирение');
        setRecommendation('Необходима консультация специалиста для разработки комплексного плана по снижению веса и улучшению здоровья.');
      }
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setCategory('');
    setRecommendation('');
  };

  const getBMIColor = () => {
    if (!bmi) return 'var(--color-gray-400)';
    if (bmi < 18.5) return 'var(--color-gray-400)';
    if (bmi >= 18.5 && bmi < 25) return 'var(--color-green)';
    if (bmi >= 25 && bmi < 30) return 'var(--color-orange)';
    return 'var(--color-red)';
  };

  const getBMIPosition = () => {
    if (!bmi) return 0;
    
    // Диапазоны ИМТ: 0-18.5, 18.5-25, 25-30, 30+
    // Каждый сегмент занимает 25% полоски
    if (bmi < 18.5) {
      // Недостаток веса: 0-25% полоски
      return Math.max(0, Math.min(25, (bmi / 18.5) * 25));
    } else if (bmi < 25) {
      // Норма: 25-50% полоски
      return 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
    } else if (bmi < 30) {
      // Избыток: 50-75% полоски
      return 50 + ((bmi - 25) / (30 - 25)) * 25;
    } else {
      // Ожирение: 75-100% полоски
      return Math.min(100, 75 + ((bmi - 30) / 10) * 25);
    }
  };

  return (
    <section className="bmi-calculator-section">
      <div className="container">
        <div className="bmi-calculator-header">
          <h2 className="section-title">
            <Calculator className="section-title-icon" />
            Калькулятор <span className="text-orange">ИМТ</span>
          </h2>
          <p className="section-subtitle">
            Рассчитайте ваш индекс массы тела и получите персональные рекомендации 
            по питанию от профессионального нутрициолога.
          </p>
        </div>

        <div className="bmi-calculator-content">
          <div className="bmi-left-column">
            <div className="bmi-calculator-form">
              <div className="bmi-form-card">
                <h3 className="bmi-form-title">Введите ваши данные</h3>
                
                <div className="bmi-form-group">
                  <label className="bmi-form-label">Вес (кг)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Например: 70"
                    className="bmi-form-input"
                    min="1"
                    max="300"
                  />
                </div>

                <div className="bmi-form-group">
                  <label className="bmi-form-label">Рост (см)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Например: 170"
                    className="bmi-form-input"
                    min="1"
                    max="250"
                  />
                </div>

                <div className="bmi-form-buttons">
                  <button 
                    onClick={calculateBMI}
                    disabled={!weight || !height}
                    className="btn btn-primary bmi-calculate-btn"
                  >
                    <Calculator size={20} className="bmi-icon-white" />
                    Рассчитать ИМТ
                  </button>
                  
                  {bmi && (
                    <button 
                      onClick={resetCalculator}
                      className="btn btn-outline bmi-reset-btn"
                    >
                      Сбросить
                    </button>
                  )}
                </div>
              </div>
        </div>
          </div>

          {bmi && (
            <div className="bmi-result">
              <div className="bmi-result-card">
                <div className="bmi-result-header">
                  <div className="bmi-result-value" style={{ color: getBMIColor() }}>
                    {bmi}
                  </div>
                  <div className="bmi-result-category" style={{ color: getBMIColor() }}>
                    {category}
                  </div>
                </div>

                <div className="bmi-scale">
                  <div className="bmi-scale-bar">
                    <div className="bmi-scale-segment bmi-underweight"></div>
                    <div className="bmi-scale-segment bmi-normal"></div>
                    <div className="bmi-scale-segment bmi-overweight"></div>
                    <div className="bmi-scale-segment bmi-obese"></div>
                  </div>
                  <div 
                    className="bmi-indicator" 
                    style={{ 
                      left: `${getBMIPosition()}%`,
                      backgroundColor: getBMIColor()
                    }}
                  ></div>
                </div>

                <div className="bmi-scale-labels">
                  <span>Недостаток</span>
                  <span>Норма</span>
                  <span>Избыток</span>
                  <span>Ожирение</span>
                </div>

                <div className="bmi-recommendation">
                  <div className="bmi-recommendation-header">
                    <Info size={20} className="bmi-icon-white" />
                    <h4>Рекомендации</h4>
                  </div>
                  <p>{recommendation}</p>
                </div>

              </div>
            </div>
          )}
        </div>

        <div className="bmi-info">
          <div className="bmi-info-card">
            <div className="bmi-info-header">
              <AlertCircle className="bmi-info-icon" />
              <h3>Важная информация</h3>
            </div>
            <div className="bmi-info-content">
              <p>
                ИМТ является ориентировочным показателем и не учитывает индивидуальные 
                особенности телосложения, мышечную массу и другие факторы. Для точной 
                оценки состояния здоровья рекомендуется консультация специалиста.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;

import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Education: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificateImages = [
    {
      src: '/images/sert.png',
      title: 'Сертификат',
      description: 'Нутрициология'
    },
    {
      src: '/images/uopk.jpg',
      title: 'Удостоверение о повышении квалификации',
      description: 'Детская нутрициология, 72 часа'
    },
    {
      src: '/images/namouopk.png',
      title: 'Диплом о профессиональной переподготовке',
      description: 'Нутрициология'
    },
    {
      src: '/images/diploma.png',
      title: 'Удостоверение о повышении квалификации',
      description: 'Детская нутрициология, 72 часа'
    }
  ];

  const certificates = [
    {
      title: 'Сертификат',
      specialty: 'Нутрициология',
      institution: 'АНО ДПО «НАМО им. Н.А. Бородина»',
      year: '2025',
      description: 'Сертификат о прохождении курса нутрициологии. Включает темы: Профессия нутрициолог, Основы биохимии и биологии, Основы физиологии, Макронутриенты и калории, Микронутриенты, Анатомия и физиология пищеварительной системы, Формирование программы питания для клиента, Методы коррекции, Основы лабораторных методов исследования, Психологические аспекты в работе нутрициолога.',
      image: '/images/sert.png'
    },
    {
      title: 'Удостоверение о повышении квалификации',
      specialty: 'Детская нутрициология',
      institution: 'АНО ДПО «НАМО им. Н.А. Бородина»',
      year: '2024',
      description: 'Специализация по формированию здоровых пищевых привычек у детей разных возрастов. 72 часа обучения.',
      image: '/images/uopk.jpg'
    },
    {
      title: 'Диплом о профессиональной переподготовке',
      specialty: 'Нутрициология',
      institution: 'АНО ДПО «НАМО им. Н.А. Бородина»',
      year: '2025',
      description: 'Полное изучение основ нутрициологии, биохимии питания, работы с различными состояниями здоровья. Диплом дает право на ведение профессиональной деятельности в сфере нутрициологии.',
      image: '/images/namouopk.png'
    },
    {
      title: 'Удостоверение о повышении квалификации',
      specialty: 'Детская нутрициология',
      institution: 'АНО ДПО «НАМО им. Н.А. Бородина»',
      year: '2025',
      description: 'Специализация по формированию здоровых пищевых привычек у детей разных возрастов. 72 часа обучения.',
      image: '/images/diploma.png'
    }
  ];

  const skills = [
    'Анализ рациона питания',
    'Составление индивидуальных планов питания',
    'Работа с ЖКТ проблемами',
    'Консультирование при диабете',
    'Детская нутрициология',
    'Противовоспалительное питание'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % certificateImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + certificateImages.length) % certificateImages.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="section section-alt education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <GraduationCap className="section-title-icon" />
            Образование и <span className="text-orange">квалификация</span>
          </h2>
          <p className="section-subtitle">
            Профессиональное образование в области нутрициологии и постоянное 
            повышение квалификации для оказания качественных услуг
          </p>
        </div>

        <div className="education-content">
          {/* Галерея сертификатов */}
          <div className="certificates-gallery">
            <h3 className="gallery-title">
              <Award className="gallery-title-icon" />
              Мои сертификаты и дипломы
            </h3>
            <div className="certificates-grid">
              {certificateImages.map((cert, index) => (
                <div 
                  key={index} 
                  className="certificate-thumbnail"
                  onClick={() => openModal(index)}
                >
                  <img 
                    src={cert.src} 
                    alt={cert.title}
                    className="certificate-image"
                  />
                  <div className="certificate-overlay">
                    <div className="certificate-info">
                      <h4 className="certificate-thumb-title">{cert.title}</h4>
                      <p className="certificate-thumb-description">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Детальная информация о сертификатах */}
          <div className="certificates">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-header">
                  <div className="certificate-icon">
                    <Award className="certificate-icon-svg" />
                  </div>
                  <div className="certificate-info">
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-specialty">{cert.specialty}</p>
                    <p className="certificate-institution">{cert.institution}</p>
                    <span className="certificate-year">{cert.year}</span>
                  </div>
                </div>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-image-preview">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="certificate-preview-img"
                    onClick={() => openModal(index)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skills-section">
            <h3 className="skills-title">
              <BookOpen className="skills-title-icon" />
              Навыки и компетенции
            </h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <CheckCircle className="skill-icon" />
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Модальное окно для просмотра сертификатов */}
        {isModalOpen && (
          <div className="certificate-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              
              <div className="modal-image-container">
                <img 
                  src={certificateImages[currentImageIndex].src}
                  alt={certificateImages[currentImageIndex].title}
                  className="modal-image"
                />
              </div>
              
              <div className="modal-info">
                <h3 className="modal-title">{certificateImages[currentImageIndex].title}</h3>
                <p className="modal-description">{certificateImages[currentImageIndex].description}</p>
              </div>
              
              <div className="modal-navigation">
                <button className="nav-button nav-prev" onClick={prevImage}>
                  <ChevronLeft size={24} />
                </button>
                <span className="image-counter">
                  {currentImageIndex + 1} / {certificateImages.length}
                </span>
                <button className="nav-button nav-next" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;

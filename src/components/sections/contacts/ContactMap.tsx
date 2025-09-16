import React from 'react';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const ContactMap: React.FC = () => {
  return (
    <section className="contact-map-section">
      <div className="container">
        <div className="contact-map-header">
          <h2 className="section-title">
            <MapPin className="section-title-icon" />
            Как <span className="text-orange">добраться</span>
          </h2>
          <p className="section-subtitle">
            Офис находится в центре Мичуринска. Удобная парковка и доступность на общественном транспорте.
          </p>
        </div>

        <div className="contact-map-content">
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin className="map-placeholder-icon" />
              <h3>Мичуринск, Тамбовская область</h3>
              <p>Центр города, удобная транспортная доступность</p>
              <div className="map-actions">
                <a 
                  href="https://yandex.ru/maps/?pt=39.5081,52.8947&z=15&l=map"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Navigation size={20} />
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>
          </div>

          <div className="location-details">
            <div className="location-detail-card">
              <div className="location-detail-header">
                <Car className="location-detail-icon" />
                <h4>На автомобиле</h4>
              </div>
              <div className="location-detail-content">
                <p>Офис находится в центре Мичуринска, рядом с главными улицами города.</p>
                <ul>
                  <li>Бесплатная парковка рядом с офисом</li>
                  <li>Удобный подъезд с любой стороны города</li>
                  <li>GPS координаты: 52.8947°N, 39.5081°E</li>
                </ul>
              </div>
            </div>

            <div className="location-detail-card">
              <div className="location-detail-header">
                <Navigation className="location-detail-icon" />
                <h4>На общественном транспорте</h4>
              </div>
              <div className="location-detail-content">
                <p>Остановка "Центр" - 2 минуты пешком от офиса.</p>
                <ul>
                  <li>Автобусы: №1, №3, №5, №7</li>
                  <li>Маршрутки: №10, №12, №15</li>
                  <li>Троллейбус: №2, №4</li>
                </ul>
              </div>
            </div>

            <div className="location-detail-card">
              <div className="location-detail-header">
                <Clock className="location-detail-icon" />
                <h4>Время работы</h4>
              </div>
              <div className="location-detail-content">
                <div className="working-hours-list">
                  <div className="working-hours-item">
                    <span>Пн-Пт:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="working-hours-item">
                    <span>Сб:</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="working-hours-item">
                    <span>Вс:</span>
                    <span>По договоренности</span>
                  </div>
                </div>
                <p className="working-hours-note">
                  <strong>Важно:</strong> Консультации только по предварительной записи!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;


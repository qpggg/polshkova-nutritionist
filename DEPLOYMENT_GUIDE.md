# 🚀 Инструкция по развертыванию сайта на VDS сервер

## 📋 Предварительные требования

- VDS сервер с Ubuntu 20.04+ или CentOS 7+
- Домен, настроенный на IP сервера
- SSH доступ к серверу
- Локальная машина с установленным Git

---

## 🔧 Шаг 1: Подключение к серверу

```bash
ssh root@YOUR_SERVER_IP
# или
ssh username@YOUR_SERVER_IP
```

---

## 🛠️ Шаг 2: Обновление системы и установка базовых пакетов

### Ubuntu/Debian:
```bash
apt update && apt upgrade -y
apt install -y curl wget git nginx certbot python3-certbot-nginx
```

### CentOS/RHEL:
```bash
yum update -y
yum install -y curl wget git nginx certbot python3-certbot-nginx
```

---

## 🟢 Шаг 3: Установка Node.js

### Установка через NodeSource (Node.js 20+):
```bash
# Для Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt-get install -y nodejs

# Для CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
yum install -y nodejs
```

### Проверка установки:
```bash
node --version
npm --version
```

## 💾 Шаг 3.1: Настройка памяти для сборки

### Создание swap-файла (если памяти меньше 2GB):
```bash
# Проверяем текущую память
free -h

# Создаем swap-файл 2GB
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Делаем swap постоянным
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Проверяем swap
free -h
swapon --show
```

### Настройка переменных окружения для Node.js:
```bash
# Увеличиваем лимит памяти для Node.js
export NODE_OPTIONS="--max-old-space-size=4096"

# Добавляем в .bashrc для постоянного эффекта
echo 'export NODE_OPTIONS="--max-old-space-size=4096"' >> ~/.bashrc
source ~/.bashrc
```

---

## 📦 Шаг 4: Установка PM2

```bash
npm install -g pm2
```

### Настройка автозапуска PM2:
```bash
pm2 startup
# Выполните команду, которую покажет PM2
pm2 save
```

---

## 📁 Шаг 5: Клонирование репозитория

```bash
# Переходим в домашнюю директорию
cd /home

# Создаем директорию для проекта
mkdir nutritionist-site
cd nutritionist-site

# Клонируем репозиторий
git clone https://github.com/qpggg/polshkova-nutritionist.git .

# Устанавливаем зависимости
npm install
```

---

## 🏗️ Шаг 6: Сборка проекта

### Подготовка к сборке:
```bash
# Переходим в директорию проекта
cd /home/nutritionist-site

# Устанавливаем зависимости
npm install

# Очищаем кэш npm (если нужно)
npm cache clean --force
```

### Сборка с оптимизацией памяти:
```bash
# Устанавливаем переменные окружения для сборки
export NODE_OPTIONS="--max-old-space-size=4096"

# Собираем проект для продакшена
npm run build

# Если сборка падает, попробуйте:
# npm run build -- --mode production

# Проверяем, что папка dist создалась
ls -la dist/
```

### Альтернативный способ сборки (если основной не работает):
```bash
# Удаляем node_modules и package-lock.json
rm -rf node_modules package-lock.json

# Переустанавливаем зависимости
npm install

# Собираем с дополнительными флагами
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## ⚙️ Шаг 7: Настройка PM2

### Создаем конфигурационный файл PM2:
```bash
nano ecosystem.config.js
```

### Содержимое файла:
```javascript
module.exports = {
  apps: [{
    name: 'nutritionist-site',
    script: 'npm',
    args: 'run preview',
    cwd: '/home/nutritionist-site',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### Запускаем приложение через PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
```

### Проверяем статус:
```bash
pm2 status
pm2 logs nutritionist-site
```

---

## 🌐 Шаг 8: Настройка Nginx

### Создаем конфигурацию сайта:
```bash
nano /etc/nginx/sites-available/nutritionist-site
```

### Содержимое конфигурации:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Логи
    access_log /var/log/nginx/nutritionist-site.access.log;
    error_log /var/log/nginx/nutritionist-site.error.log;

    # Основная директория
    root /home/nutritionist-site/dist;
    index index.html;

    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Основные маршруты
    location / {
        try_files $uri $uri/ /index.html;
        
        # Кэширование статических файлов
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Проксирование API запросов (если нужно)
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Безопасность
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### Активируем сайт:
```bash
# Создаем символическую ссылку
ln -s /etc/nginx/sites-available/nutritionist-site /etc/nginx/sites-enabled/

# Удаляем дефолтную конфигурацию (если есть)
rm -f /etc/nginx/sites-enabled/default

# Проверяем конфигурацию
nginx -t

# Перезапускаем Nginx
systemctl restart nginx
systemctl enable nginx
```

---

## 🔒 Шаг 9: Настройка SSL сертификата (Let's Encrypt)

```bash
# Получаем SSL сертификат
certbot --nginx -d your-domain.com -d www.your-domain.com

# Настраиваем автообновление
crontab -e
# Добавляем строку:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

---

## 🔄 Шаг 10: Настройка автоматического обновления

### Создаем скрипт обновления:
```bash
nano /home/update-site.sh
```

### Содержимое скрипта:
```bash
#!/bin/bash

cd /home/nutritionist-site

# Получаем последние изменения
git pull origin main

# Устанавливаем зависимости
npm install

# Собираем проект
npm run build

# Перезапускаем PM2
pm2 restart nutritionist-site

echo "Site updated successfully at $(date)"
```

### Делаем скрипт исполняемым:
```bash
chmod +x /home/update-site.sh
```

### Настраиваем cron для автоматического обновления (опционально):
```bash
crontab -e
# Добавляем строку для обновления каждый день в 3:00:
# 0 3 * * * /home/update-site.sh >> /var/log/site-update.log 2>&1
```

---

## 🛡️ Шаг 11: Настройка файрвола

### UFW (Ubuntu):
```bash
ufw allow ssh
ufw allow 'Nginx Full'
ufw allow 3000
ufw --force enable
```

### FirewallD (CentOS):
```bash
firewall-cmd --permanent --add-service=ssh
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --permanent --add-port=3000/tcp
firewall-cmd --reload
```

---

## 📊 Шаг 12: Мониторинг и логи

### Просмотр логов PM2:
```bash
pm2 logs nutritionist-site
pm2 logs nutritionist-site --lines 100
```

### Просмотр логов Nginx:
```bash
tail -f /var/log/nginx/nutritionist-site.access.log
tail -f /var/log/nginx/nutritionist-site.error.log
```

### Мониторинг ресурсов:
```bash
pm2 monit
```

---

## 🔧 Полезные команды

### PM2:
```bash
pm2 status                    # Статус приложений
pm2 restart nutritionist-site # Перезапуск
pm2 stop nutritionist-site    # Остановка
pm2 delete nutritionist-site  # Удаление
pm2 logs --lines 50          # Последние 50 строк логов
```

### Nginx:
```bash
nginx -t                     # Проверка конфигурации
systemctl status nginx       # Статус Nginx
systemctl restart nginx      # Перезапуск Nginx
systemctl reload nginx       # Перезагрузка конфигурации
```

### Git:
```bash
git pull origin main         # Обновление кода
git status                   # Статус репозитория
git log --oneline -5         # Последние 5 коммитов
```

---

## 🚨 Устранение неполадок

### Если сборка падает с ошибкой "Killed":
```bash
# Проверяем доступную память
free -h

# Проверяем swap
swapon --show

# Увеличиваем swap (если нужно)
sudo fallocate -l 4G /swapfile2
sudo chmod 600 /swapfile2
sudo mkswap /swapfile2
sudo swapon /swapfile2

# Устанавливаем переменные окружения
export NODE_OPTIONS="--max-old-space-size=6144"
export GENERATE_SOURCEMAP=false

# Пробуем собрать снова
npm run build
```

### Если не хватает места на диске:
```bash
# Проверяем место на диске
df -h

# Очищаем кэш npm
npm cache clean --force

# Удаляем ненужные файлы
sudo apt autoremove -y
sudo apt autoclean

# Очищаем логи
sudo journalctl --vacuum-time=3d
```

### Если сайт не загружается:
1. Проверьте статус PM2: `pm2 status`
2. Проверьте логи PM2: `pm2 logs nutritionist-site`
3. Проверьте статус Nginx: `systemctl status nginx`
4. Проверьте конфигурацию Nginx: `nginx -t`

### Если порт 3000 занят:
```bash
lsof -i :3000
kill -9 PID_NUMBER
pm2 restart nutritionist-site
```

### Если нужно изменить порт:
1. Отредактируйте `ecosystem.config.js`
2. Обновите конфигурацию Nginx
3. Перезапустите PM2 и Nginx

### Если Node.js версия не подходит:
```bash
# Удаляем старую версию
sudo apt remove nodejs npm

# Устанавливаем Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Проверяем версию
node --version
```

---

## ✅ Проверка работоспособности

1. Откройте браузер и перейдите на `http://your-domain.com`
2. Проверьте, что сайт загружается корректно
3. Проверьте мобильную версию
4. Убедитесь, что все ссылки работают
5. Проверьте SSL сертификат: `https://your-domain.com`

---

## 📝 Дополнительные настройки

### Оптимизация производительности:
- Включите кэширование в Nginx
- Настройте сжатие gzip
- Используйте CDN для статических файлов

### Безопасность:
- Регулярно обновляйте систему
- Настройте fail2ban для защиты от брутфорса
- Используйте сильные пароли
- Настройте регулярные бэкапы

---

## 🚀 Быстрое решение проблемы с памятью

### Если сборка постоянно падает, выполните этот скрипт:
```bash
#!/bin/bash
# Скрипт для решения проблем с памятью при сборке

echo "🔧 Настройка памяти для сборки проекта..."

# Создаем дополнительный swap
sudo fallocate -l 4G /swapfile2
sudo chmod 600 /swapfile2
sudo mkswap /swapfile2
sudo swapon /swapfile2

# Устанавливаем переменные окружения
export NODE_OPTIONS="--max-old-space-size=6144"
export GENERATE_SOURCEMAP=false

# Очищаем кэш
npm cache clean --force

# Удаляем старые файлы сборки
rm -rf dist node_modules package-lock.json

# Переустанавливаем зависимости
npm install

# Собираем проект
echo "🏗️ Начинаем сборку..."
npm run build

echo "✅ Готово! Проверьте папку dist/"
```

### Сохраните как fix-memory.sh и выполните:
```bash
nano fix-memory.sh
# Вставьте содержимое скрипта выше
chmod +x fix-memory.sh
./fix-memory.sh
```

## 🎉 Готово!

Ваш сайт теперь развернут на VDS сервере и доступен по домену. 

**Основные URL:**
- Сайт: `https://your-domain.com`
- Логи PM2: `pm2 logs nutritionist-site`
- Логи Nginx: `/var/log/nginx/nutritionist-site.*.log`

**Для обновления сайта:**
```bash
cd /home/nutritionist-site
./update-site.sh
```

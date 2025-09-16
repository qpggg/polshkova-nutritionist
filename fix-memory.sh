#!/bin/bash
# Скрипт для решения проблем с памятью при сборке проекта

echo "🔧 Настройка памяти для сборки проекта..."

# Проверяем текущую память
echo "📊 Текущая память:"
free -h

# Создаем дополнительный swap (4GB)
echo "💾 Создаем дополнительный swap..."
sudo fallocate -l 4G /swapfile2
sudo chmod 600 /swapfile2
sudo mkswap /swapfile2
sudo swapon /swapfile2

# Проверяем swap
echo "📊 Память после добавления swap:"
free -h
swapon --show

# Устанавливаем переменные окружения
echo "⚙️ Настраиваем переменные окружения..."
export NODE_OPTIONS="--max-old-space-size=6144"
export GENERATE_SOURCEMAP=false

# Добавляем в .bashrc для постоянного эффекта
echo 'export NODE_OPTIONS="--max-old-space-size=6144"' >> ~/.bashrc
echo 'export GENERATE_SOURCEMAP=false' >> ~/.bashrc

# Очищаем кэш
echo "🧹 Очищаем кэш npm..."
npm cache clean --force

# Удаляем старые файлы сборки
echo "🗑️ Удаляем старые файлы сборки..."
rm -rf dist node_modules package-lock.json

# Переустанавливаем зависимости
echo "📦 Переустанавливаем зависимости..."
npm install

# Собираем проект
echo "🏗️ Начинаем сборку..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Сборка успешно завершена! Проверьте папку dist/"
    ls -la dist/
else
    echo "❌ Сборка не удалась. Попробуйте увеличить swap еще больше."
    echo "💡 Рекомендации:"
    echo "   - Увеличьте swap до 8GB: sudo fallocate -l 8G /swapfile3"
    echo "   - Или используйте более мощный сервер"
fi

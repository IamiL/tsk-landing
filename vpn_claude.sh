#!/bin/bash

# Запуск sing-box в фоне
echo "🔧 Запуск sing-box..."
sing-box run -c ~/config.json > /dev/null 2>&1 &
SING_PID=$!

# Запуск privoxy
echo "🔧 Перезапуск privoxy..."
sudo service privoxy restart

# Небольшая пауза
sleep 1

# Запуск Claude через HTTP-прокси
echo "🌐 Запуск Claude через VPN-прокси..."
http_proxy=http://127.0.0.1:8118 https_proxy=http://127.0.0.1:8118 claude

# После завершения - остановить sing-box
echo "🛑 Остановка sing-box..."
kill $SING_PID

echo "✅ Готово."
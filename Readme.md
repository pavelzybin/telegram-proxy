# Запуск:
docker build -t tg-proxy .

docker run -d -p 3003:3003 --restart=always tg-proxy

# Проверка
http://93.183.70.224:3003/bot<TOKEN>/getMe

# Если не открыто:
ufw allow 3003

# Laravel (финальный URL)
$url = "http://93.183.70.224:3003/bot{$bot_token}/sendMessage";

или через домен:

$url = "https://stagetest.shop/tg/bot{$bot_token}/sendMessage";
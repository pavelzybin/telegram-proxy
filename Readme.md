# Установка git & docker:
sudo apt install git -y

sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

sudo systemctl start docker

sudo systemctl enable docker

sudo systemctl status docker

docker --version

# Перейти в папку, где будет проект и скопировать с git:
cd /var/www

git clone https://github.com/pavelzybin/telegram-proxy.git

cd telegram-proxy/

# Запуск:
docker build -t tg-proxy .

docker run -d -p 3003:3003 --restart=always tg-proxy

# Если не открыто:
ufw allow 3003

# Проверка (не нужно)
http://00.00.00.000:3003/bot<TOKEN>/getMe

# Laravel (финальный URL)
$url = "http://00.00.00.000:3003/bot{$bot_token}/sendMessage";

или через домен:

$url = "https://mydomain.com/tg/bot{$bot_token}/sendMessage";
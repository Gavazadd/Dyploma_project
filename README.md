### Запуск проекту

#### Сервер 
- cd ./server
- Створіть файли .env та вкажіть інформацію:<br>
  PORT = 5000 <br>
  DB_NAME = Назва БД<br>
  DB_USER = Ім'я користувача БД<br>
  DB_PASSWORD = Пароль БД<br>
  DB_HOST = HOST БД<br>
  DB_PORT = PORT БД<br>
  SECRET_KEY = секретний ключ для створення JWT <br>
  SMTP_HOST = "smtp.gmail.com"<br>
  SMTP_PORT = 587<br>
  SMTP_USER = пошта для розсилання повідомлень<br>
  SMTP_PASSWORD = пароль до пошти<br>
  API_URL = http://localhost:5000 <br>
  CLIENT_URL = http://localhost:3000/activate
- npm ci
- npm run dev
#### Клієнт
- cd ./client
- Створіть файли .env та вкажіть інформацію:<br>
  REACT_APP_API_URL='http://localhost:5000/'
- npm ci
- npm start

### TaskManager

## Installation

Run the following commands in your terminal:

```bash
git clone https://github.com/CharlesMariga/todo-app
cd todo-app
```

Install depencies for both laravel and vue:

```bash
composer install
```

```bash
npm install
```

Update the environment variables:

```bash
cp .env.example .env
```

Update the following fields:

```bash
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT=
```

Run the following commands to create the relevant tables and get up and running:

```bash
php artisan migrate --seed

php artisan key:generate

php artisan storage:link

php artisan serve

npm run dev
```

## Test user details

```bash
Email: johndoe@example.com
Password: password
```


# Laravel WEBGIS Installation Guide on Local Computer
This guide will help you clone and install a Laravel webgis project on your local computer.

## Condition
Before starting the installation, make sure you have :
- PHP installed (minimum PHP 7.3)
- Composer installed
- MySQL or others

## Step 1: Clone Laravel Repository
To clone a Laravel repository, open your terminal and run the following command :

```shell
git clone https://github.com/kadekwidiana/webgis-API.git
```

## Step 2: Install Dependencies
After successfully cloning the project, navigate to the project directory and run the following command to install all dependencies :
```shell
cd webgis-API
composer install
```

## Step 3: Configure .env
Copy the .env.example file into .env :

```shell
cp .env.example .env
```

Then open the .env file with your text editor and set your database configuration. You need to fill in the following information:

```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=username
DB_PASSWORD=password
```
Replace database_name, username and password with your database information.

## Step 4: Database Migration
Run database migration to create the required tables:
```shell
php artisan migrate
```

## Step 5: Running the Laravel Application
To run the Laravel application, run the following command:
```shell
php artisan serve
```
Your Laravel application will run on http://localhost:8000. Open your browser and visit the URL to see your application running.

## Additional Guidance
To configure the web server or other settings, see the official Laravel documentation at laravel.com/docs.
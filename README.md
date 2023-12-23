# task-main

Make sure you have environment setup properly. You will need PHP8.1, composer and Node.js.

Download the project (or clone using GIT) 

1. Copy .env.example into .env and configure database credentials
2. Navigate to the project's root directory using terminal Run "composer install"
3. Set the encryption key by executing "php artisan key:generate --ansi"
4. Run migrations "php artisan migrate --seed"

/This one runs the server/ 

1. Start local server by executing php artisan serve
2. Open new terminal and navigate to the php artisan serve react folder "cd .\react\"
3. Copy react/.env.example into .env and adjust the "VITE_API_BASE_URL=http://localhost:8000" parameter
4. Run "npm install"
5. Run "npm run dev" to start vite server for React

Start local server 
"php artisan serve" 
"npm run dev" to start vite server for React

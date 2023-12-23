<?php

// config/cors.php

return [

    'paths' => ['api/*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://localhost:3000'],  // Agrega tu URL de React aquí

    // ...
];


<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //  \App\Models\User::factory(30)->create();

        \App\Models\User::factory()->create([
            'name' => 'Julian',
            'last_name' => 'Emiliano',
            'email' => 'julian@test.com',
            'password' => bcrypt('12345678'),
            'image_path' => 'imagenes_perfil/1701265255.png',
        ]);    

        // Task::factory(30)->create();

        \App\Models\Task::factory()->create([
            'title' => 'Tarea 1',
            'description' => 'Esta es la tarea 1',
            'due_date' => '2021-12-08',
            'state' => 'Pendiente',
            'user_id' => '1',
        ]);

        \App\Models\Task::factory()->create([
            'title' => 'Tarea 2',
            'description' => 'Esta es la tarea 2',
            'due_date' => '2021-12-08',
            'state' => 'Pendiente',
            'user_id' => '1',
        ]);
    }
}

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Post;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Post::class, function (Faker $faker) {
	$random_files = ['ham.mp3','woo_vu_luvub_dub_dub.mp3','Show_me_what_you_got!.mp3'];
    return [
        'title' => $faker->sentence(3),
        'slug' => str_slug($faker->name,'-'),
        'user_id' => rand(1,10),
        'lyrics' => $faker->paragraph(3),
        'filename' => $random_files[array_rand($random_files)],
        'prompt_id' => rand(1, 2),
    ];
});

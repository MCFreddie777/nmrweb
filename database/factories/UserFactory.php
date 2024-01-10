<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Role;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

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

$factory->define(User::class, function (Faker $faker) {
    $roles = Role::whereIn('name',array('laborant', 'user'))->pluck('id');

    return [
        'login' => $faker->userName,
        'password' => Hash::make($faker->password),
        'role_id' => $faker->randomElement($roles),
    ];
});

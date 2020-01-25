<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Solvent;
use Faker\Generator as Faker;

$factory->define(Solvent::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
    ];
});

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Grant;
use Faker\Generator as Faker;

$factory->define(Grant::class, function (Faker $faker) {
    $faker->addProvider(new \Faker\Provider\en_US\Company($faker));
    return [
        'name' => $faker->catchPhrase,
    ];
});

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Grant;
use App\Sample;
use App\Solvent;
use App\User;
use Faker\Generator as Faker;

$factory->define(Sample::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'user_id' => function () {
            return factory(User::class)->create()->id;
        },
        'solvent_id' => function () {
            return factory(Solvent::class)->create()->id;
        },
        'own_solvent' => $faker->boolean,
        'amount' => $faker->numberBetween(0,500),
        'structure' => $faker->realText(50),
        'spectrometer' => $faker->randomElement(['300', '600']),
        'return' => $faker->boolean,
        'grant_id' => function () {
            return factory(Grant::class)->create()->id;
        },
        'note' => $faker->sentence,
    ];
});

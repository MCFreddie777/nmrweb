<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Grant;
use App\Sample;
use App\Solvent;
use App\User;
use Faker\Generator as Faker;


$factory->define(Sample::class, function (Faker $faker) {
    $users = $users = User::whereHas('role', function($q){
         $q->where('name', 'user');
     })->get();
    $grants = Grant::all()->pluck('id');
    $solvents = Solvent::all()->pluck('id');

    return [
        'name' => $faker->sentence($nbWords = 3, $variableNbWords = true),
        'user_id' => $faker->randomElement($users),
        'solvent_id' => $faker->randomElement($solvents),
        'own_solvent' => $faker->boolean,
        'amount' => $faker->numberBetween(0,500),
        // MolFile structure for JSME Applet
        'structure' => "C/2=F/C=P\C([C+]1#[O+2][Br+]NCOO1)=C2
        JME 2017-02-26 Mon Apr 13 14:41:15 GMT+200 2020

         13 14  0  0  0  0  0  0  0  0999 V2000
            2.4249    3.0483    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
            2.4249    4.4483    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0
            1.2124    5.1483    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
            0.0000    4.4483    0.0000 F   0  0  0  0  0  0  0  0  0  0  0  0
            0.0000    3.0483    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
            1.2124    2.3483    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
            3.6373    2.3483    0.0000 C   0  3  0  0  0  0  0  0  0  0  0  0
            3.5327    0.9522    0.0000 O   0  2  0  0  0  0  0  0  0  0  0  0
            4.5590    0.0000    0.0000 Br  0  3  0  0  0  0  0  0  0  0  0  0
            5.9433    0.2087    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
            6.6433    1.4211    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
            6.1318    2.7243    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
            4.7940    3.1370    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
          1  2  1  0  0  0  0
          2  3  2  0  0  0  0
          3  4  1  0  0  0  0
          4  5  2  0  0  0  0
          5  6  1  0  0  0  0
          6  1  2  0  0  0  0
          1  7  1  0  0  0  0
          8  9  1  0  0  0  0
          9 10  1  0  0  0  0
         10 11  1  0  0  0  0
         11 12  1  0  0  0  0
         12 13  1  0  0  0  0
          7 13  1  0  0  0  0
          7  8  3  0  0  0  0
        M  CHG  1   7   1
        M  CHG  1   8   2
        M  CHG  1   9   1
        M  END
        ",
        'spectrometer' => $faker->randomElement(['300', '600']),
        'return' => $faker->boolean,
        'grant_id' => function () use ($faker, $grants) {
            // Not all samples need to belong to grant
            if (rand(0, 1)) {
                return $faker->randomElement($grants);
            }
            else {
                return NULL;
            }
        },
        'note' => $faker->sentence,
    ];
});

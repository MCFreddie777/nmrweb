<?php

use App\Grant;
use App\Sample;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SamplesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Sample::class,30)->create();
    }
}

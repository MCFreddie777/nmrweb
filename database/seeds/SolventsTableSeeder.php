<?php

use App\Solvent;
use Illuminate\Database\Seeder;

class SolventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Solvent::class,5)->create();
    }
}

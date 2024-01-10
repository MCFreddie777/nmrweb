<?php

use App\Grant;
use App\User;
use Illuminate\Database\Seeder;

class GrantsTableSeeder extends Seeder
{
    /**
     * Create grants for user role "garant"
     *
     * @return void
     */
    public function run()
    {
        factory(Grant::class,5)->create();
    }
}

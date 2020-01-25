<?php

use App\Sample;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 20)->create()->each(function ($user) {
            $user->samples()->save(factory(Sample::class)->make());
        });
    }
}

<?php

use App\User;
use App\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Creates all the users
     *
     * @return void
     */
    public function run()
    {

         /**
         * Create each type of a role and associate an account
         * e.g admin@test.sk, laborant@test.sk etc.
         */

        $roles = [];

         foreach (array('admin', 'laborant', 'user') as $rolename) {
            $role = new Role();
            $role->name = $rolename;
            $role->save();
            $roles += [$role->name => $role];
         }

         /**
          * Computing and saving the ultimate and unbreakable password
          */
         $password = Hash::make('Nbusr123');

         foreach ($roles as $key => $role) {
             $user = new User();
             $user->login = $key . '@test.sk';
             $user->password = $password;
             $user->role_id = $role->id;
             $user->save();
         }

        // Generate other users
        factory(User::class, 20)->create(['password' => $password]);
    }
}

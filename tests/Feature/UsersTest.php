<?php

namespace Tests\Feature;

use App\Role;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UsersTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_list_of_users_can_be_fetched()
    {
        $this->withoutExceptionHandling();
        $user = factory(User::class)->create();

        $response = $this->get('api/users');


        $response->assertJsonCount(1)->assertJson([[
            'id' => $user->id,
            'login' => $user->login,
            'role_id' => $user->role->id,
        ]]);
    }

    /** @test */
    public function a_user_can_be_added()
    {
        $this->withoutExceptionHandling();

        $role = factory(Role::class)->create();
        $user = [
            'login' => 'user1',
            'password' => 'secret',
            'role_id' => $role->id,
        ];

        $this->post('/api/users', $user);
        $this->assertCount(1, User::all());

        $fetchedUser = User::first();

        $this->assertEquals('user1', $fetchedUser->login);
        $this->assertEquals('secret', $fetchedUser->password);
        $this->assertEquals($role->id, $fetchedUser->role->id);
    }
}

<?php

namespace Tests\Feature;

use App\Contact;
use App\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class UsersTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_list_of_users_can_be_fetched()
    {
//        $this->withoutExceptionHandling();

        $user = factory(User::class)->create();

        $response = $this->get('/api/users');

        $response->assertStatus(\Illuminate\Http\Response::HTTP_OK);
        $response->assertJsonCount(1);
        $response->assertJson([
            [
                "id" => $user->id,
                "login" => $user->login,
                "local_dir" => $user->local_dir,
                "share_dir" => $user->share_dir,
                "spravca" => $user->spravca,
            ]
        ]);
    }
}

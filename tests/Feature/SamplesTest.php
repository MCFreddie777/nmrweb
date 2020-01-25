<?php

namespace Tests\Feature;

use App\Sample;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class SamplesTest extends TestCase
{

    use RefreshDatabase;

    /** @test */
    public function a_list_of_samples_can_be_fetched()
    {
        $this->withoutExceptionHandling();

        $sample = factory(Sample::class)->create();

        $response = $this->get('/api/samples');

        $response->assertStatus(Response::HTTP_OK)
            ->assertJsonCount(1)
            ->assertJson([[
                'name' => $sample->name,
                'user_id' => $sample->user->id,
                'solvent_id' => $sample->solvent->id,
                'own_solvent' => $sample->own_solvent,
                'amount' => $sample->amount,
                'structure' => $sample->structure,
                'spectrometer' => $sample->spectrometer,
                'return' => $sample->return,
                'grant_id' => $sample->grant->id,
                'note' => $sample->note,
                'created_at' => $sample->created_at,
                'updated_at' => $sample->updated_at,
            ]]);
    }
}

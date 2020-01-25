<?php

namespace App\Http\Controllers;

use App\Sample;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SamplesController extends Controller
{
    public function index()
    {
        return response()->json([
            'samples' => Sample::with('user')->get(),
            'success' => true,
        ], Response::HTTP_OK);
    }
}

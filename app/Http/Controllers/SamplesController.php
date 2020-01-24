<?php

namespace App\Http\Controllers;

use App\Sample;
use Illuminate\Http\Request;

class SamplesController extends Controller
{
    public function index()
    {
        return Sample::all();
    }
}

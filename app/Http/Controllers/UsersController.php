<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsersController extends Controller
{

    public function index()
    {
        return response()->json([
            'users' => User::with('role')->get(),
            'success' => true,
        ], Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        User::create($request->all());
    }
}

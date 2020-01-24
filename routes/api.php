<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'Auth\AuthController@login');

Route::prefix('users')->group(function () {
    Route::get('/', 'UsersController@index');
    Route::post('/', 'UsersController@store');
});


Route::prefix('samples')->group(function () {
    Route::get('/', 'SamplesController@index');
});

Route::any('.*', function () {
    return abort(404);
});

Route::middleware('auth:api')->group(function () {
});

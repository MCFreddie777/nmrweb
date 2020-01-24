<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    public $timestamps = false;

    protected $guarded = [];

    protected $hidden = [
        'password',
    ];

    public function role()
    {
        return $this->belongsTo('App\Role');
    }
}

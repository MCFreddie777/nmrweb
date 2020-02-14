<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    public $timestamps = false;

    protected $guarded = [];

    protected $hidden = [
        'password', 'role_id'
    ];

    public function role()
    {
        return $this->belongsTo('App\Role');
    }

    public function samples()
    {
        return $this->hasMany('App\Sample');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}

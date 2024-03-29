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
}

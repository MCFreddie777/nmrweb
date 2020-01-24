<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sample extends Model
{

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function grant()
    {
        return $this->belongsTo('App\Grant');
    }

    public function solvent()
    {
        return $this->belongsTo('App\Solvent');
    }
}

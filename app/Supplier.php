<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    public function product($value='')
    {
        return $this->belongsTo( 'App\Product' );
    }
}

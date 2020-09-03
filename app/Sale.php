<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    public function products( $value='' )
    {
        return $this->hasMany( 'App\Product' );
    }
}

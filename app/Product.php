<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function sale($value='')
    {
        return $this->belongsTo( 'App\Sale' );
    }

    public function suppliers( $value='' )
    {
        return $this->hasMany( 'App\Supplier' );
    }
}

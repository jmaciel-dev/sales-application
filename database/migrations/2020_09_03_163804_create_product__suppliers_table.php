<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product__suppliers', function (Blueprint $table) {
            $table->unsignedBigInteger('product_id')->comment('id do produto');
            $table->foreign('product_id')->references('id')->on('products');
            $table->unsignedBigInteger('supplier_id')->comment('id do fornecedor');
            $table->foreign('supplier_id')->references('id')->on('suppliers');
            $table->timestamps();
            $table->primary( [ 'product_id','supplier_id', ] );
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product__suppliers');
    }
}

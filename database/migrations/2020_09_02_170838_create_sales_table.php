<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->integer('name')->comment('numero da venda');
            $table->integer('product_id')->unsigned()->comment('id do produto');
            $table->foreign( 'product_id' )->references( 'id' )->on( 'accounts' );
            $table->decimal('price',10,2)->comment('preco do produto');
            $table->integer('amount')->comment('quantidade do produto');
            $table->date('date');
            $table->string('CEP');
            $table->string('address');
            $table->string('number');
            $table->string('complement');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}

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
            $table->integer('sale_number')->comment('numero da venda');
            $table->unsignedBigInteger('product_id')->comment('id do produto');
            $table->foreign('product_id')->references('id')->on('products');
            $table->decimal('price',10,2)->comment('preco do produto');
            $table->integer('amount')->comment('quantidade do produto');
            $table->date('date')->comment('data da venda');
            $table->string('CEP')->comment('cep do endereco de entrega');
            $table->string('address')->comment('endereco de entrega');
            $table->string('number')->comment('numero do endereco de entrega');
            $table->string('complement')->comment('complemento do endereco de entrega');
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

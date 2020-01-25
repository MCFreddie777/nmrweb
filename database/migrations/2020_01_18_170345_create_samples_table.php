<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('samples', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->unsignedBigInteger('user_id');

            $table->unsignedBigInteger('solvent_id');
            $table->boolean('own_solvent');
            $table->decimal('amount');

            $table->string('structure');
            $table->integer('spectrometer');

            $table->boolean('return');
            $table->unsignedBigInteger('grant_id');

            $table->string('note');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('solvent_id')->references('id')->on('solvents')->onDelete('cascade');
            $table->foreign('grant_id')->references('id')->on('grants')->onDelete('cascade');
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
        Schema::dropIfExists('samples');
    }
}

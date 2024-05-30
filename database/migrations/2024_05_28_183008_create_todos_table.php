<?php

use App\Enums\Priority;
use App\Enums\Status;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->id();
            $table->string('title')->require();
            $table->text('description')->require();
            $table->enum('status', [Status::BACKLOG->value, Status::COMPLETE->value, Status::PENDING->value]);
            $table->enum('priority', [Priority::HIGH->value, Priority::HIGHEST->value, Priority::LOW->value, Priority::LOWEST->value, Priority::MEDIUM->value]);
            $table->foreignIdFor(User::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('todos');
    }
};

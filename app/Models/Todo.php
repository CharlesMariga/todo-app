<?php

namespace App\Models;

use App\Enums\Priority;
use App\Enums\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'priority',
        'title',
        'description',
        'user_id'
    ];

    protected $casts = [
        'status' => Status::class,
        'priority' => Priority::class
    ];
}

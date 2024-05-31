<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show()
    {

        $todos = Todo::all()->where('user_id', "=", Auth::user()->id)->map(fn ($todo) => [
            'id' => $todo->id,
            'title' => $todo->title,
            'status' => $todo->status,
            'priority' => $todo->priority,
            'description' => $todo->description,
            'created_at' => $todo->created_at
        ]);

        $groupedTodos = $todos->groupBy('status');

        return Inertia::render('Dashboard/Index', [
            'todos' => array_values($todos->toArray()),
            'groupedTodos' => $groupedTodos,
        ]);
    }
}

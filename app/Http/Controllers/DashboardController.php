<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show()
    {

        // $todos = Todo::all()->where('user_id', "=", Auth::user()->id);
        $todos = Todo::all()->where('user_id', "=", Auth::user()->id)->map(fn ($todo) => [
            'title' => $todo->title,
            'status' => $todo->status,
            'priority' => $todo->priority,
            'description' => $todo->description,
        ]);

        $groupedTodos = $todos->groupBy('status');

        return Inertia::render('Dashboard/Index', [
            'todos' => array_values($todos->toArray()),
            'groupedTodos' => $groupedTodos,
        ]);
    }
}

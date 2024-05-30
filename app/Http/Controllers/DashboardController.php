<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show()
    {
        return Inertia::render('Dashboard/Index', [
            'todos' => Todo::all(),
            'user' => Auth::user()
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function create()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }

        return Inertia::render('Auth/Login');
    }

    public function store()
    {
        // Validate the user
        $validatedAttributes = request()->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        // Attempt to login the user
        if (!Auth::attempt($validatedAttributes)) {
            throw ValidationException::withMessages([
                'email' => 'Invalid credentials!'
            ]);
        }

        // Regerate the session token
        request()->session()->regenerate();

        // Redirect
        return redirect("/dashboard");
    }

    public function destroy()
    {
        Auth::logout();

        return Inertia::location('/');
    }
}

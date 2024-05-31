<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{

    public function show()
    {
        return Inertia::render('Profile/Show');
    }

    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    public function store()
    {

        // validate the user
        $validatedAttributes = request()->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'max:254'],
            'password' => ['required', Password::min(8), 'confirmed'],
        ]);

        // create the user
        $user = User::create($validatedAttributes);

        // login
        Auth::login($user);

        // redirect
        return redirect('/dashboard');
    }
}

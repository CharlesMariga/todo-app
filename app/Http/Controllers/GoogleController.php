<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function create()
    {
        return Inertia::location(Socialite::driver('google')->redirect());
    }

    public function store()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
        } catch (Exception) {
            return Inertia::location('/get-started');
        }


        $user = User::updateorCreate(
            ['google_id' => $googleUser->id],
            [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'avatar' => $googleUser->avatar,
                'password' => Str::password(12)
            ]
        );

        Auth::login($user);

        // redirect
        return redirect('/dashboard');
    }
}

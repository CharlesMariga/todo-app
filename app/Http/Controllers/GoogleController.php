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

        // Find the user with that email
        $user = User::query()->where("email", "=", $googleUser->email)->get()->first();

        if ($user) {
            $user->update([
                'google_id' => $googleUser->id
            ]);

            Auth::login($user);

            // redirect
            return redirect('/dashboard');
        } else {
            $createdUser = User::create([
                'name' => $googleUser->name,
                'avatar' => $googleUser->avatar,
                'password' => Str::password(12),
                'google_id' => $googleUser->id
            ]);

            Auth::login($createdUser);

            // redirect
            return redirect('/dashboard');
        }
    }
}

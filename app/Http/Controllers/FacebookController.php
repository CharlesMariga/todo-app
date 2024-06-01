<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;


class FacebookController extends Controller
{
    public function create()
    {
        return Inertia::location(Socialite::driver('facebook')->redirect());
    }

    public function store()
    {
        try {
            $facebookUser = Socialite::driver('facebook')->user();
        } catch (Exception) {
            return Inertia::location('/get-started');
        }


        // Find the user with that email
        $user = User::query()->where("email", "=", $facebookUser->email)->get()->first();

        if ($user) {
            $user->update([
                'facebook_id' => $facebookUser->id
            ]);

            Auth::login($user);

            // redirect
            return redirect('/dashboard');
        } else {
            $createdUser = User::create([
                'name' => $facebookUser->name,
                'avatar' => $facebookUser->avatar,
                'password' => Str::password(12),
                'facebook_id' => $facebookUser->id
            ]);

            Auth::login($createdUser);

            // redirect
            return redirect('/dashboard');
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function show()
    {
        return Inertia::render('Profile/Show');
    }

    public function create()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }

        return Inertia::render('Auth/Register');
    }

    public function update(UpdateUserRequest $request, User $user)
    {

        if (!$user->is(Auth::user())) {
            return abort(403, 'Unauthorized action.');
        }

        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');

            $file_extension = $file->getClientOriginalExtension();

            $uuid = Str::uuid()->toString();

            $file_name = "{$uuid}.{$file_extension}";

            $link = "public/{$file_name}";

            Storage::disk('local')->put("{$link}", file_get_contents($file));

            $user->update(['avatar' => $file_name]);

            return redirect()->route('profile')->with('message', 'Profile picture updated successfully!');
        }

        if ($request->has('name')) {
            $user->name = $request->name;
            $user->save();

            return redirect()->route('profile')->with('message', 'Profile details updated successfully!');
        }

        return redirect()->back()->with('error', 'Update failed!');
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

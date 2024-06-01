<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function update(Request $request)
    {

        $request->validate([
            'current_password' => ['required'],
            'password' => ['required', Password::min(8), 'confirmed']
        ]);

        if (!Hash::check($request->current_password, Auth::user()->password)) {
            return redirect()->back()->withErrors(['current_password' => 'Current passsword does not match!']);
        }


        $user = User::query()->where('id', "=", Auth::user()->id)->get()->first();
        $user->update(['password' => Hash::make($request->password)]);
        return redirect()->back()->with('message', 'Password successfully updated!');
    }
}

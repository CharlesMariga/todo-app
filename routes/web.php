<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return view('index');
})->name('home');

Route::get('/get-started', fn () => Inertia::render('GetStarted'));

Route::get('/login', [SessionController::class, 'create'])->name('login');
Route::post('/login', [SessionController::class, 'store']);
Route::post('/logout', [SessionController::class, 'destroy']);

Route::get('/register', [RegisteredUserController::class, 'create']);
Route::post('/register', [RegisteredUserController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'show'])->name('dashboard');
    Route::get('/account', [AccountController::class, 'show'])->name('account');
    Route::get('/profile', function () {
        return Inertia::render('Profile/Show');
    });

    Route::post('/todos', [TodoController::class, 'store']);
});

Route::get('/auth/google/redirect', [GoogleController::class, 'create']);
Route::get('/auth/google/callback', [GoogleController::class, 'store']);

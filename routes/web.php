<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FacebookController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('index');
})->name('home');

Route::get('/get-started', function () {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('GetStarted');
});

Route::get('/login', [SessionController::class, 'create'])->name('login');
Route::post('/login', [SessionController::class, 'store']);
Route::post('/logout', [SessionController::class, 'destroy']);

Route::get('/register', [UserController::class, 'create']);
Route::post('/register', [UserController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'show'])->name('dashboard');
    Route::get('/profile', [UserController::class, 'show'])->name('profile');

    Route::post('/todos', [TodoController::class, 'store']);
    Route::patch('/todos/{todo}', [TodoController::class, 'update'])->name("todos.update");
    Route::delete('/todos/{todo}', [TodoController::class, 'destroy'])->name("todos.delete");

    Route::post("/users/{user}", [UserController::class, 'update']);

    Route::patch('/update-password', [AuthController::class, 'update']);
});

Route::get('/auth/google/redirect', [GoogleController::class, 'create']);
Route::get('/auth/google/callback', [GoogleController::class, 'store']);

Route::get('/auth/facebook/redirect', [FacebookController::class, 'create']);
Route::get('/auth/facebook/callback', [FacebookController::class, 'store']);

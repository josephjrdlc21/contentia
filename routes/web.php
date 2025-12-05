<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;

Route::name('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'login'])->name('login');
    }); 
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [MainController::class, 'index'])->name('index');
}); 
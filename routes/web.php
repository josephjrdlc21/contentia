<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

use Inertia\Inertia;

Route::get('/', function () {
    return inertia('welcome');
})->name('home');


Route::name('auth.')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('login');
});
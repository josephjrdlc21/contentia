<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\UserController;

Route::name('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'login'])->name('login');
        Route::post('/authenticate', [AuthController::class, 'authenticate'])->name('authenticate');
    }); 

    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [MainController::class, 'index'])->name('index');

    Route::prefix('users')->name('users.')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('index');
        Route::post('/store', [UserController::class, 'store'])->name('store');
        Route::post('/update/{id?}', [UserController::class, 'update'])->name('update');
        Route::get('/update-status/{id?}', [UserController::class, 'update_status'])->name('update_status');
        Route::get('/update-password/{id?}', [UserController::class, 'update_password'])->name('update_password');
        Route::any('/delete/{id?}', [UserController::class, 'destroy'])->name('delete');
    }); 
}); 
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;

Route::middleware('guest')->group(function () {
    Route::get('/', [MainController::class, 'home'])->name('home');
    Route::get('/blog/{id?}', [MainController::class, 'show'])->name('show');
    Route::post('/comment/{id?}', [MainController::class, 'comment_store'])->name('comment_store');
});  

Route::name('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'login'])->name('login');
        Route::post('/authenticate', [AuthController::class, 'authenticate'])->name('authenticate');
    }); 

    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [MainController::class, 'index'])->name('index');

    Route::middleware('role:super_admin')->group(function () {
        Route::prefix('users')->name('users.')->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('index');
            Route::post('/store', [UserController::class, 'store'])->name('store');
            Route::post('/update/{id?}', [UserController::class, 'update'])->name('update');
            Route::get('/update-status/{id?}', [UserController::class, 'update_status'])->name('update_status');
            Route::get('/update-password/{id?}', [UserController::class, 'update_password'])->name('update_password');
            Route::any('/delete/{id?}', [UserController::class, 'destroy'])->name('delete');
        }); 

        Route::prefix('authors')->name('authors.')->group(function () {
            Route::get('/', [AuthorController::class, 'index'])->name('index');
            Route::get('/update-status/{id?}', [AuthorController::class, 'update_status'])->name('update_status');
            Route::get('/update-password/{id?}', [AuthorController::class, 'update_password'])->name('update_password');
            Route::any('/delete/{id?}', [AuthorController::class, 'destroy'])->name('delete');
        });   

        Route::prefix('categories')->name('categories.')->group(function () {
            Route::get('/', [CategoryController::class, 'index'])->name('index');
            Route::post('/store', [CategoryController::class, 'store'])->name('store');
            Route::post('/update/{id?}', [CategoryController::class, 'update'])->name('update');
            Route::any('/delete/{id?}', [CategoryController::class, 'destroy'])->name('delete');
        }); 
    });

    Route::middleware('role:super_admin,author')->group(function () {
        Route::prefix('posts')->name('posts.')->group(function () {
            Route::get('/', [PostController::class, 'index'])->name('index');
            Route::get('/create', [PostController::class, 'create'])->middleware('role:author')->name('create');
            Route::post('/store', [PostController::class, 'store'])->middleware('role:author')->name('store');
            Route::get('/update-status/{id?}', [PostController::class, 'update_status'])->name('update_status');
            Route::any('/delete/{id?}', [PostController::class, 'destroy'])->name('delete');
        });

        Route::prefix('comments')->name('comments.')->group(function () {
            Route::get('/', [CommentController::class, 'index'])->name('index');
            Route::get('/update-status/{id?}/{status?}', [CommentController::class, 'update_status'])->name('update_status');
            Route::any('/delete/{id?}', [CommentController::class, 'destroy'])->name('delete');
        });  

        Route::prefix('profile')->name('profile.')->group(function () {
            Route::get('/', [ProfileController::class, 'index'])->name('index');
            Route::post('/update/{id?}', [ProfileController::class, 'update'])->name('update');
            Route::get('/change-password', [ProfileController::class, 'change_password'])->name('change_password');
            Route::post('/update-password/{id?}', [ProfileController::class, 'update_password'])->name('update_password');
        });
    });
}); 
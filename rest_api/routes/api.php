<?php

use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\WishListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function(){
    Route::apiResource('wishList', WishListController::class);
});

Route::post('v1/users/register', [UserController::class, 'register']);
Route::post('v1/users/login', [UserController::class, 'login']);

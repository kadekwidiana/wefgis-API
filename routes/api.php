<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CropController;
use App\Http\Controllers\API\TypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Crop
Route::apiResource('crops', CropController::class);
Route::post('/crops/{id}', [CropController::class, 'update']);

// Crop
Route::apiResource('types', TypeController::class);
Route::post('/types/{id}', [TypeController::class, 'update']);

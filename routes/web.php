<?php

use App\Http\Controllers\CropChacoengsaoController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::get('/', function () {
    return view('frontpage.maps');
});

Route::get('/pointCrop/json', [CropChacoengsaoController::class, 'pointCropJson'])->name('json-crop');
Route::get('/earthData', [CropChacoengsaoController::class, 'dataEarth'])->name('json-earth');

// GEE
Route::get('/water-occurrences', [CropChacoengsaoController::class, 'getWaterOccurrences']);
// VHI
Route::post('/vhi-data', [CropChacoengsaoController::class, 'getVhiData']);

Route::post('/water-preception',[CropChacoengsaoController::class, 'preception'])->name('preception');
Route::post('/vci',[CropChacoengsaoController::class, 'vci'])->name('vci');
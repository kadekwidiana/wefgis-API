<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Crop extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_type',
        'label',
        'address',
        'latitude',
        'longitude',
        'description',
        'image',
        'plant_date',
        'valid',
    ];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}

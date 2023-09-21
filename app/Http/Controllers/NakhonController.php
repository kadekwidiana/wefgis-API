<?php

namespace App\Http\Controllers;

use App\Models\DataNakhon;
use Illuminate\Http\Request;

class NakhonController extends Controller
{
    public function pointNakhon()
    {
        $result = DataNakhon::all();
        return json_encode($result);
    }
}

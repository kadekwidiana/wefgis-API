<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class PredCropController extends Controller
{
    public function predCrop(Request $request)
    {
        $file = $request->file('file');

        $client = new Client;
        $url = "http://178.16.142.61:5000";
        
        $response = $client->post($url, [
            'multipart' => [
                [
                    'name' => 'file',
                    'contents' => fopen($file->getPathname(), 'r'),
                    'filename' => $file->getClientOriginalName(),
                ],
            ],
        ]);
        
        $responseData = json_decode($response->getBody(), true);

        // Change value response predictions
        if (isset($responseData['predictions'])) {
            switch ($responseData['predictions']) {
                case 'rice':
                    $responseData['predictions'] = 'Paddy';
                    break;
                case 'corn':
                    $responseData['predictions'] = 'Corn';
                    break;
                case 'cassava':
                    $responseData['predictions'] = 'Cassava';
                    break;
                case 'sugarcane':
                    $responseData['predictions'] = 'Sugarcane';
                    break;
                // Other..
            }
        }

        return response()->json($responseData);
    }

}

<?php

namespace App\Http\Controllers;

use App\Models\CropChachoengsao;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CropChacoengsaoController extends Controller
{
    private $baseUrl = "http://rs.wefgis.com";
    public function index()
    {
        $results = CropChachoengsao::all();
        return view('frontpage.maps', compact('results'));
    }

    public function pointCrop()
    {
        $result = CropChachoengsao::all();
        return json_encode($result);
    }

    public function waterOccurrence()
    {
        try {
            $url = $this->baseUrl.'/wateroccurence';
            $response = Http::get($url);
            $data = $response->json();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => 'API request failed'], 500);
        }
    }

    public function precipitation(Request $request){
        $geometry = $request->input('geometry');
        $type = $request->input('type');
        $startYear = $request->input('startYear');
        $endYear = $request->input('endYear');

        $client = new Client;

        $url = $this->baseUrl."/precipitation";
        $response = $client->post($url, [
            // 'headers' => $headers,
            'form_params' => [
                'geometry' => $geometry,
                'type' => $type,
                'startYear' => $startYear,
                'endYear' => $endYear,
            ]
        ]);
        $responseData = json_decode($response->getBody(), true);
    
        return response()->json($responseData);
    }
    public function vci(Request $request){
        $geometry = $request->input('geometry');
        $type = $request->input('type');
        $startYear = $request->input('startYear');
        $endYear = $request->input('endYear');

        $client = new Client;
        $url = $this->baseUrl."/vci";
        $response = $client->post($url, [
            'form_params' => [
                'geometry' => $geometry,
                'type' => $type,
                'startYear' => $startYear,
                'endYear' => $endYear,
            ]
        ]);
        $responseData = json_decode($response->getBody(), true);
    
        return response()->json($responseData);
    }
    public function evi(Request $request){
        $geometry = $request->input('geometry');
        $type = $request->input('type');
        $startYear = $request->input('startYear');
        $endYear = $request->input('endYear');

        $client = new Client;
        $url = $this->baseUrl."/evi";
        $response = $client->post($url, [
            'form_params' => [
                'geometry' => $geometry,
                'type' => $type,
                'startYear' => $startYear,
                'endYear' => $endYear,
            ]
        ]);
        $responseData = json_decode($response->getBody(), true);
    
        return response()->json($responseData);
    }
}

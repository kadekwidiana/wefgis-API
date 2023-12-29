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

    private $books = [
        [
            "judul" => "Harry Potter and the Sorcerer's Stone",
            "isbn" => "978-0-7475-3269-6",
            "pengarang" => "J.K. Rowling",
            "tahun_terbit" => "1997"
        ],
        [
            "judul" => "To Kill a Mockingbird",
            "isbn" => "0-06-112008-1",
            "pengarang" => "Harper Lee",
            "tahun_terbit" => "1960"
        ],
        [
            "judul" => "1984",
            "isbn" => "0-452-28423-6",
            "pengarang" => "George Orwell",
            "tahun_terbit" => "1949"
        ],
        [
            "judul" => "The Great Gatsby",
            "isbn" => "978-0-7432-7356-5",
            "pengarang" => "F. Scott Fitzgerald",
            "tahun_terbit" => "1925"
        ],
        [
            "judul" => "The Catcher in the Rye",
            "isbn" => "978-0-316-76948-0",
            "pengarang" => "J.D. Salinger",
            "tahun_terbit" => "1951"
        ]
    ];

    public function index()
    {
        return response()->json($this->books);
    }

}

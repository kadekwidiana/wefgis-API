<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Geographic Information System</title>
        <link rel="icon" href="assets/icons/icon-navigasi/location.png" type="image/x-icon">
        <!-- css bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- css leaflet -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
        <!-- icon -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <!-- SAEARCH GEOCODER -->
        <link rel="stylesheet" href="{{ asset('assets/css-leaflet/leaflet-control-geocoder.Geocoder.css') }}">
        <!-- NAVIGASI BAR -->
        <link rel="stylesheet" href="{{ asset('assets/css-leaflet/Leaflet.NavBar.css') }}">
        <!-- MAIN STYLE -->
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <!-- sidebar css -->
        <link rel="stylesheet" href="{{ asset('css/sidebar.css') }}">

        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

        <!-- chart -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <!-- leaflet draw -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css" />

    </head>
    <!-- tes -->

    <body>
        @include('frontpage.layouts.navbar')
        @include('frontpage.layouts.sidebar')
        
        @yield('content')
        
    </body>
    <!-- js bootstrap -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> -->
    <!-- Include Bootstrap JavaScript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <!-- SEEARCH FEATURE -->
    <script src="{{ asset('assets/js-leaflet/leaflet-control-geocoder.Geocoder.js') }}"></script>
    <!-- HASH IN URL -->
    <script src="{{ asset('assets/js-leaflet/leaflet-hash.js') }}"></script>
    <!-- NAVIGASI BAR -->
    <script src="{{ asset('assets/js-leaflet/Leaflet.NavBar.js') }}"></script>
    <!-- MAIN JS -->
    <script src="{{ asset('js/main.js') }}"></script>
    <!-- CHART JS -->
    <script src="{{ asset('js/chart.js') }}"></script>
    <!-- CHART-POPUP JS -->
    <script src="{{ asset('js/chart-popup.js') }}"></script>
    <!-- sidebar js -->
    <script src="{{ asset('js/sidebar.js') }}"></script>

    <!-- leaflet js draw -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js">
    </script>
    <!-- turf and axios -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Turf.js/6.5.0/turf.min.js"></script>

    <!-- feature draw -->
    <script src="{{ asset('js/draw.js') }}"></script>

</html>
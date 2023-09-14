<!-- Sidebar basemap -->
<div class="container sidebar-basemap bg-white mt-0" id="sidebar-basemap">
    <h5 class="text-center">Basemap</h5>
    <div class="border mb-2"></div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-check">
                <input class="form-check-input itemCheckbox border border-secondary" type="checkbox" value=""
                    id="googleMapsLabel" data-layer="markerGroup1">
                <label class="form-check-label" for="googleMapsLabel">
                    Label
                </label>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="basemap-options">
                <label>
                    <img src="assets/icons/icon-basemap/openstreetmap_blackandwhite.png" alt="OpenStreetMap"
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="openStreetMap" checked>
                    OSM
                </label>
                <label>
                    <img src="assets/icons/icon-basemap/google-streets.png" alt="GoogleStreetMap"
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="googleStreetMap">
                    Street
                </label>

            </div>
        </div>

        <div class="col-md-6">
            <div class="basemap-options">
                <label>
                    <img src="assets/icons/icon-basemap/here_satelliteday.png" alt="Satellite "
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="satelliteMap">
                    Satelite
                </label>
                <label>
                    <img src="assets/icons/icon-basemap/google-hibrid.png" alt="Satellite "
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="googleHibridMap">
                    Hibrid
                </label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="basemap-options">
                <label>
                    <img src="assets/icons/icon-basemap/esri-street.png" alt="Esri"
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="esriWorldStreetMap">
                    Esri Street
                </label>
                <label>
                    <img src="assets/icons/icon-basemap/topo-map.png" alt="OpenTopoMap"
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="openTopoMap">
                    TopoMap
                </label>

            </div>
        </div>

        <div class="col-md-6">
            <div class="basemap-options">
                <label>
                    <img src="assets/icons/icon-basemap/esri-satelite.png" alt="Esri "
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="esriSatelite">
                    Esri Satelite
                </label>
                <label>
                    <img src="assets/icons/icon-basemap/google-earth.png" alt="Thunderforest "
                        class="img-fluid custom-image-basemap">
                    <input class="form-check-input" type="radio" name="basemap" value="googleEarth">
                    Earth
                </label>
            </div>
        </div>
    </div>
</div>

<!-- Sidebar layer -->
<div class="container sidebar-layer bg-white mt-0 pb-5" id="sidebar-layer">
    <h5 class="text-center">Layer</h5>
    <div class="border mb-2"></div>
    <div class="col pb-4">
        <div class="border rounded">
            <!-- <div class="border-top"></div> -->
            <p class="bg-secondary p-2 m-0 rounded-top fw-bold">Crop</p>
            <div class="p-2">
                <div class="form-check">
                    <input name="corn" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_corn" data-layer="corn">
                    <label class="form-check-label" for="point_corn">
                        Corn
                    </label>
                </div>
                <div class="form-check">
                    <input name="paddy" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_paddy" data-layer="paddy">
                    <label class="form-check-label" for="point_paddy">
                        Paddy
                    </label>
                </div>

                <div class="form-check">
                    <input name="baresoil" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_baresoil" data-layer="baresoil">
                    <label class="form-check-label" for="point_baresoil">
                        Baresoil
                    </label>
                </div>

                <div class="form-check">
                    <input name="cassava" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_cassava" data-layer="cassava">
                    <label class="form-check-label" for="point_cassava">
                        Cassava
                    </label>
                </div>

                <div class="form-check">
                    <input name="eucalyptus" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_eucalyptus" data-layer="eucalyptus">
                    <label class="form-check-label" for="point_eucalyptus">
                        Eucalyptus
                    </label>
                </div>

                <div class="form-check">
                    <input name="forest" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_forest" data-layer="forest">
                    <label class="form-check-label" for="point_forest">
                        Forest
                    </label>
                </div>

                <div class="form-check">
                    <input name="grassland" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_grassland" data-layer="grassland">
                    <label class="form-check-label" for="point_grassland">
                        Grassland
                    </label>
                </div>

                <div class="form-check">
                    <input name="palm" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_palm" data-layer="palm">
                    <label class="form-check-label" for="point_palm">
                        Palm
                    </label>
                </div>

                <div class="form-check">
                    <input name="rubber" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_rubber" data-layer="rubber">
                    <label class="form-check-label" for="point_rubber">
                        Rubber
                    </label>
                </div>

                <div class="form-check">
                    <input name="building" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_building" data-layer="building">
                    <label class="form-check-label" for="point_building">
                        Building
                    </label>
                </div>

                <div class="form-check">
                    <input name="sugarcane" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_sugarcane" data-layer="sugarcane">
                    <label class="form-check-label" for="point_sugarcane">
                        Sugarcane
                    </label>
                </div>

                <div class="form-check">
                    <input name="water" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="point_water" data-layer="water">
                    <label class="form-check-label" for="point_water">
                        Water
                    </label>
                </div>

            </div>

            <!-- Tambahkan item lain di sini -->
        </div>
        <div class="border rounded mt-2 d-none">
            <!-- <div class="border-top"></div> -->
            <p class="bg-secondary p-2 m-0 rounded-top fw-bold">Google Earth Engine</p>
            <div class="p-2">
                <div class="form-check">
                    <input name="tci" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="tci" data-layer="tci">
                    <label class="form-check-label" for="tci">
                        TCI
                    </label>
                </div>
                <div class="form-check">
                    <input name="vci" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="vci" data-layer="vci">
                    <label class="form-check-label" for="vci">
                        VCI
                    </label>
                </div>
                <div class="form-check">
                    <input name="vhi" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="vhi" data-layer="vhi">
                    <label class="form-check-label" for="vhi">
                        VHI
                    </label>
                </div>
            </div>

            <!-- Tambahkan item lain di sini -->
        </div>

        <div class="border rounded mt-2">
            <!-- <div class="border-top"></div> -->
            <p class="bg-secondary p-2 m-0 rounded-top fw-bold">GEE</p>
            <div class="p-2">
                <div class="form-check">
                    <input name="water" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="water" data-layer="water">
                    <label class="form-check-label" for="water">
                        Chachoengsao
                    </label>
                </div>
                <div class="form-check">
                    <input name="change_intensity" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="change_intensity" data-layer="change_intensity">
                    <label class="form-check-label" for="change_intensity">
                        Change Intensity
                    </label>
                </div>
                <div class="form-check">
                    <input name="igbp" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="igbp" data-layer="igbp">
                    <label class="form-check-label" for="igbp">
                        IGBP
                    </label>
                </div>
                <div class="form-check">
                    <input name="lst" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="lst" data-layer="lst">
                    <label class="form-check-label" for="lst">
                        LST
                    </label>
                </div>
                <div class="form-check">
                    <input name="occurrence" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="occurrence" data-layer="occurrence">
                    <label class="form-check-label" for="occurrence">
                        Occurrence
                    </label>
                </div>

                <div class="form-check">
                    <input name="water_season" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="water_season" data-layer="water_season">
                    <label class="form-check-label" for="water_season">
                        Water Season
                    </label>
                </div>

            </div>

            <!-- Tambahkan item lain di sini -->
        </div>
        <!-- GEOSERVER -->
        <div class="border rounded mt-2 d-none">
            <!-- <div class="border-top"></div> -->
            <p class="bg-secondary p-2 m-0 rounded-top fw-bold">Geo Server</p>
            <div class="p-2">
                <div class="form-check">
                    <input name="chachoengsao_prov" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="chachoengsao_prov" data-layer="chachoengsao_prov">
                    <label class="form-check-label" for="chachoengsao_prov">
                        Chachoengsao Prov
                    </label>
                </div>
                <div class="form-check">
                    <input name="river_chachoengsao" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="river_chachoengsao" data-layer="river_chachoengsao">
                    <label class="form-check-label" for="river_chachoengsao">
                        River Chachoengsao
                    </label>
                </div>
                <div class="form-check">
                    <input name="crops_chachoengsao" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="crops_chachoengsao" data-layer="crops_chachoengsao">
                    <label class="form-check-label" for="crops_chachoengsao">
                        Crops Chachoengsao
                    </label>
                </div>
                <div class="form-check">
                    <input name="water_body" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="water_body" data-layer="water_body">
                    <label class="form-check-label" for="water_body">
                        Water Body
                    </label>
                </div>
                <div class="form-check">
                    <input name="building_polygon" class="form-check-input border border-secondary" type="checkbox"
                        value="" id="building_polygon" data-layer="building_polygon">
                    <label class="form-check-label" for="building_polygon">
                        Building Polygon
                    </label>
                </div>
            </div>

            <!-- Tambahkan item lain di sini -->
        </div>
    </div>

</div>

<!-- Sidebar legend -->
<div class="container sidebar-legend bg-white mt-0 pb-5" id="sidebar-legend">
    <h5 class="text-center">Legend</h5>
    <div class="border mb-2"></div>
    <div class="col">
        <div class="border rounded mt-2">
            <!-- <div class="border-top"></div> -->
            <p class="bg-secondary p-2 m-0 rounded-top fw-bold">Crop Legend</p>
            <div class="p-2">
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/corn.png" alt="">
                    Corn
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/paddy.png" alt="">
                    Paddy
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/baresoil.png" alt="">
                    Baresoil
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/cassava.png" alt="">
                    Cassava
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/eucalyptus.png" alt="">
                    Eucalyptus
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/forest.png" alt="">
                    Forest
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/grassland.png" alt="">
                    Grassland
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/palm.png" alt="">
                    Palm
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/rubber.png" alt="">
                    Rubber
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/gedung.png" alt="">
                    Building
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/sugarcan.png" alt="">
                    Sugarcane
                    </label>
                </div>
                <div class="">
                    <img class="rounded float-left" src="assets/icons/icon-marker/water.png" alt="">
                    Water
                    </label>
                </div>

            </div>

            <!-- Tambahkan item lain di sini -->
        </div>

        {{-- <div class="border rounded mt-2">
            <!-- <div class="border-top"></div> -->
            <p class="bg-secondary p-2 m-0 rounded-top fw-bold">Province Chachoengsao</p>
            <div class="p-2">
                <div class="">
                    <img class="rounded float-left"
                        src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=style_prov_chachoengsao"
                        alt="">
                    Province boundary
                    </label>
                </div>

            </div>

        </div>

        <div class="border rounded mt-2 mb-4">
            <!-- <div class="border-top"></div> -->
            <p class="bg-secondary p-2 m-0 rounded-top fw-bold">Water Chachoengsao</p>
            <div class="p-2">
                <div class="">
                    <img class="rounded float-left"
                        src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=thailand_service:style_river_chachoengsao"
                        alt="">
                    </label>
                </div>

            </div>

        </div> --}}

    </div>
</div>

</div>

<!-- Sidebar analisis -->
<div class="container sidebar-analisis bg-white mt-0 pb-5" id="sidebar-analisis">
    <h5 class="text-center">Information</h5>
    <div class="border mb-2"></div>
    <div class="col">
        <div class="border rounded mt-2 p-2">

            <form action="" method="post" id="datForm">
                {{-- <div class="form-group mt-2">
                    <label for="geometry">Geometry</label>
                    <textarea class="form-control" id="geometry" name="geometry" placeholder="geojson"></textarea>
                </div> --}}
                <div class="form-group mt-2">
                    <label for="area">Area</label>
                    <input class="form-control" id="area" name="area" placeholder="area">
                </div>

                <div class="d-flex justify-content-end mt-2">
                    <button type="button" class="btn btn-info" id="getInfoBtn">Get Information</button>
                </div>
            </form>
        </div>
        <div class="">
            <div class="border rounded mt-2 mb-3">
                <canvas id="chartTCI"></canvas>
                <p class="text-center">Month</p>
            </div>
            <div class="border rounded mt-2">
                <canvas id="chartVCI"></canvas>
                <p class="text-center">Month</p>
            </div>
            <div class="border rounded mt-2">
                <canvas id="chartVHI"></canvas>
                <p class="text-center">Month</p>
            </div>
        </div>
    </div>
</div>

<!-- Sidebar analisis point -->
<div class="container sidebar-analisis-point bg-white mt-0 pb-5" id="sidebar-analisis-point">
    <h5 class="text-center">Information</h5>
    <div class="border mb-2"></div>
    <div class="col">
        <div class="border rounded mt-2 p-2">

            <form action="" method="post" id="datForm">
                <div class="form-group mt-2">
                    <label for="geometry">Geometry</label>
                    <textarea class="form-control" id="geometry" name="geometry" placeholder="geojson"></textarea>
                </div>
                <div class="form-group mt-2">
                    <label for="type">Type</label>
                    <input class="form-control" id="type" name="type" placeholder="Type" required>
                </div>

                <div class="row mb-2">
                    <div class="col">
                        <div class="form-group mt-2">
                            <label for="startYear">Start Year</label>
                            {{-- <input class="form-control" id="startYear" name="startYear" placeholder="startYear" required> --}}
                            <select id="startYear" class="form-select" aria-label="Default select example">
                                {{-- <option>Start Year</option> --}}
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022" selected>2022</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group mt-2">
                            <label for="endYear">End Year</label>
                            {{-- <input class="form-control" id="endYear" name="endYear" placeholder="endYear" required> --}}
                            <select id="endYear" class="form-select" aria-label="Default select example">
                                {{-- <option>Start Year</option> --}}
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022" selected>2022</option>
                            </select>
                        </div>
                    </div>
                </div>
                {{-- get info --}}
                <div id="getInfo" class="d-flex justify-content-end mt-2">
                    <button type="button" class="btn btn-primary" id="reqInfo">Get Information</button>
                </div>
                {{-- load get info --}}
                <div id="loadInfo" class="d-flex justify-content-end mt-2 d-none">
                    <button class="btn btn-primary " type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>

            </form>
        </div>
        <div class="mt-3">
            <div class="">
                <div class="form-check">
                    <input name="precipitation" class="form-check-input border border-secondary d-none"
                        type="checkbox" value="" id="precipitation_id" data-layer="precipitation">
                    <label class="form-check-label" for="precipitation">
                        Precipitation
                    </label>
                </div>
                <div class="border rounded mt-2 mb-3">
                    <div id="loadingPrecipitation"
                        class="d-flex justify-content-center align-items-center mt-5 mb-5 d-none">
                        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <p id="failedGetPrecipitation" class="text-center mt-3 mb-3 d-none">Data not found</p>
                    <div id="grafikPrecipitation" class="d-none">
                        <canvas id="chartRequestPrecipitation"></canvas>
                        <p class="text-center">Month</p>
                    </div>

                </div>
            </div>
            <div class="">
                <div class="form-check">
                    <input name="vci" class="form-check-input border border-secondary d-none" type="checkbox"
                        value="" id="vci_id" data-layer="vci" checked>
                    <label class="form-check-label" for="vci">
                        VCI (Vegetation Condition Index)
                    </label>
                </div>
                <div class="border rounded mt-2 mb-3">
                    <div id="loadingVCI" class="d-flex justify-content-center align-items-center mt-5 mb-5 d-none">
                        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <p id="failedGetVCI" class="text-center mt-3 mb-3 d-none">Data not found</p>
                    <div id="grafikVCI" class="d-none">
                        <canvas id="chartRequestVci"></canvas>
                        <p class="text-center">Month</p>
                    </div>

                </div>
            </div>
            <div class="">
                <div class="form-check">
                    <input name="evi" class="form-check-input border border-secondary d-none" type="checkbox"
                        value="" id="evi_id" data-layer="evi">
                    <label class="form-check-label" for="evi">
                        EVI (Enhanced Vegetation Index)
                    </label>
                </div>

                <div class="border rounded mt-2 mb-3">
                    <div id="loadingEVI" class="d-flex justify-content-center align-items-center mt-5 mb-5 d-none">
                        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <p id="failedGetEVI" class="text-center mt-3 mb-3 d-none">Data not found</p>
                    <div id="grafikEVI" class="d-none">
                        <canvas id="chartRequestEvi"></canvas>
                        <p class="text-center">Month</p>
                    </div>

                </div>
            </div>
            <div class="">
                <div class="form-check">
                    <input name="msi" class="form-check-input border border-secondary d-none" type="checkbox"
                        value="" id="msi_id" data-layer="msi">
                    <label class="form-check-label" for="msi">
                        MSI (Moisture Stress Index)
                    </label>
                </div>

                <div class="border rounded mt-2 mb-3">
                    <div id="loadingMSI" class="d-flex justify-content-center align-items-center mt-5 mb-5 d-none">
                        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <p id="failedGetMSI" class="text-center mt-3 mb-3 d-none">Data not found</p>
                    <div id="grafikMSI" class="d-none">
                        <canvas id="chartRequestMsi"></canvas>
                        <p class="text-center">Month</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

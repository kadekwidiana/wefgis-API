// Basemaps
const atributeName = '© WebGIS chachoengsao';
var openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: atributeName,
});

var googleStreetMap = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    attribution: atributeName,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

var satelliteMap = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: atributeName,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

var googleHibridMap = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
    attribution: atributeName,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

// basemap from cht gpt
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',

});
var esriSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© <a href="https://www.esri.com">Esri</a>',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});
var esriWorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© <a href="https://www.esri.com">Esri</a>',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});
var googleEarth = L.tileLayer('https://storage.googleapis.com/global-surface-water/tiles2021/transitions/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.thunderforest.com/maps/landscape/">Thunderforest</a>',
});

//basemap Google Maps Label
var googleMapsLabel = L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}');

// Fungsi untuk mengatur visibilitas lapisan Google Maps Label berdasarkan checkbox
function updateGoogleMapsLabelVisibility() {
    if (document.getElementById('googleMapsLabel').checked) {
        map.addLayer(googleMapsLabel);
    } else {
        map.removeLayer(googleMapsLabel);
    }
}

// Event listener untuk mengaktifkan fungsi saat checkbox berubah
document.getElementById('googleMapsLabel').addEventListener('change', updateGoogleMapsLabelVisibility);

// Initialize the map with the default basemap
var map = L.map('map', {
    layers: [openStreetMap],
    center: [13.666790631230649, 101.35322935835381],
    zoom: 10,
    minZoom: 5,
    zoomControl: false
});

// Fungsi untuk membuat ikon
function createCustomIcon(iconUrl) {
    return L.icon({
        iconUrl: iconUrl,
        iconSize: [25, 32], // ukuran ikon
        iconAnchor: [16, 32], // anchor point pada ikon
        popupAnchor: [0, -32]
    });
}

// Definisikan ikon-ikon dengan menggunakan fungsi createCustomIcon
var baresoilIcon = createCustomIcon('assets/icons/icon-marker/baresoil.png');
var cassavaIcon = createCustomIcon('assets/icons/icon-marker/cassava.png');
var cropIcon = createCustomIcon('assets/icons/icon-marker/corn.png');
var eucalyptusIcon = createCustomIcon('assets/icons/icon-marker/eucalyptus.png');
var forestIcon = createCustomIcon('assets/icons/icon-marker/forest.png');
var grasslandIcon = createCustomIcon('assets/icons/icon-marker/grassland.png');
var paddyIcon = createCustomIcon('assets/icons/icon-marker/paddy.png');
var palmIcon = createCustomIcon('assets/icons/icon-marker/palm.png');
var rubberIcon = createCustomIcon('assets/icons/icon-marker/rubber.png');
var settlementIcon = createCustomIcon('assets/icons/icon-marker/gedung.png');
var sugarcaneIcon = createCustomIcon('assets/icons/icon-marker/sugarcan.png');
var waterIcon = createCustomIcon('assets/icons/icon-marker/water.png');
var cornIcon = createCustomIcon('assets/icons/icon-marker/corn.png');


// const baresoil = L.layerGroup();
const cassava = L.layerGroup();
const baresoil = L.layerGroup();
const crop = L.layerGroup();
const eucalyptus = L.layerGroup();
const forest = L.layerGroup();
const grassland = L.layerGroup();
const paddy = L.layerGroup();
const palm = L.layerGroup();
const rubber = L.layerGroup();
const settlement = L.layerGroup();
const sugarcane = L.layerGroup();
const water = L.layerGroup();

// geoserver layer
const chachoengsao_prov = L.layerGroup();
const river_chachoengsao = L.layerGroup();
const crops_chachoengsao = L.layerGroup();
const water_body = L.layerGroup();
const building_polygon = L.layerGroup();

// earth_engine layer
const tci = L.layerGroup();
const vci = L.layerGroup();
const vhi = L.layerGroup();

// earth data
$.getJSON("/api/earthData", function (data) {
    let tciUrl = data.map.tci;
    let vciUrl = data.map.vci;
    let vhiUrl = data.map.vhi;

    // LAYER GOOGLE EART ENGINE
    const tileLayer_tci = L.tileLayer(tciUrl, {
    });
    tileLayer_tci.addTo(tci);

    const tileLayer_vci = L.tileLayer(vciUrl, {
    });
    tileLayer_vci.addTo(vci);

    const tileLayer_vhi = L.tileLayer(vhiUrl, {
    });
    tileLayer_vhi.addTo(vhi);

}).fail(function (jqXHR, textStatus, error) {
    console.log("Error: " + error);
});

// Event listener untuk checkbox Crop
document.getElementById('tci').addEventListener('change', function () {
    if (this.checked) {
        tci.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        tci.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('vci').addEventListener('change', function () {
    if (this.checked) {
        vci.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        vci.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('vhi').addEventListener('change', function () {
    if (this.checked) {
        vhi.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        vhi.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});

// WATER GEE
$.getJSON("/api/water-occurrences", function (data_map) {
    console.log(data_map.map.IGBP);

    const tileLayer_changeIntensity = L.tileLayer(data_map.map.ChangeIntensity, {
    });
    tileLayer_changeIntensity.addTo(change_intensity);

    const tileLayer_igbp = L.tileLayer(data_map.map.IGBP, {
    });
    tileLayer_igbp.addTo(igpb);

    const tileLayer_lst = L.tileLayer(data_map.map.LST, {
    });
    tileLayer_lst.addTo(lst);

    const tileLayer_occurrence = L.tileLayer(data_map.map.Occurrence, {
    });
    tileLayer_occurrence.addTo(occurrence);

    const tileLayer_water = L.tileLayer(data_map.map.Water, {
    });
    tileLayer_water.addTo(water_gee);

    const tileLayer_waterSeason = L.tileLayer(data_map.map.WaterSeason, {
    });
    tileLayer_waterSeason.addTo(water_season);

}).fail(function (jqXHR, textStatus, error) {
    console.log("Error: " + error);
});

const change_intensity = L.layerGroup();
const igpb = L.layerGroup();
const lst = L.layerGroup();
const occurrence = L.layerGroup();
const water_gee = L.layerGroup();
const water_season = L.layerGroup();

// Change Intensity
document.getElementById('change_intensity').addEventListener('change', function () {
    if (this.checked) {
        change_intensity.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        change_intensity.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// IGBP
document.getElementById('igbp').addEventListener('change', function () {
    if (this.checked) {
        igpb.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        igpb.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// LST
document.getElementById('lst').addEventListener('change', function () {
    if (this.checked) {
        lst.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        lst.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Occurence
document.getElementById('occurrence').addEventListener('change', function () {
    if (this.checked) {
        occurrence.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        occurrence.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Water
document.getElementById('water').addEventListener('change', function () {
    if (this.checked) {
        water_gee.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        water_gee.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Water Season
document.getElementById('water_season').addEventListener('change', function () {
    if (this.checked) {
        water_season.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        water_season.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});


$(document).ready(function () {
    $("#getInfoBtn").click(function () {
        // Mengambil nilai dari input geometry dan type
        var geometryValue = $("#geometry").val();
        var typeValue = 'point';

        // Data yang akan dikirim dalam permintaan POST
        var postData = {
            geometry: geometryValue,
            type: typeValue,
            startYear: '2022',
            endYear: '2022'
        };

        // URL tujuan
        var url = "/api/water-preception";

        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(postData),
            contentType: "application/json",
            success: function (response) {
                console.log("Berhasil:", response);
            },
            error: function (error) {
                console.log("Gagal:", error);
            }
        });
    });
});

// LAYER GEOSERVER
// Fungsi untuk menambahkan WMS layer dengan konfigurasi yang diberikan
function addWMSToMap(url, layerName, targetLayer) {
    var wms_layer = L.tileLayer.wms(url, {
        layers: layerName,
        format: 'image/png',
        transparent: true,
    });
    wms_layer.addTo(targetLayer);
}

// Panggil fungsi untuk menambahkan WMS layer ke dalam lapisan tertentu
addWMSToMap("http://localhost:8080/geoserver/river_thailand/wms", 'river_thailand:prov_chachoengsao', chachoengsao_prov);
addWMSToMap("http://localhost:8080/geoserver/river_thailand/wms", 'river_thailand:river-chachoengsao', river_chachoengsao);
addWMSToMap("http://localhost:8080/geoserver/river_thailand/wms", 'river_thailand:crops-point', crops_chachoengsao);
addWMSToMap("http://localhost:8080/geoserver/geo_tiff/wms?service=WMS", 'geo_tiff:occurrence_100E_20Nv1_4_2021(1)', water_body);
addWMSToMap("http://localhost:8080/geoserver/thailand_service/wms", 'thailand_service:building', building_polygon);


// Fungsi untuk mengatur tampilan lapisan berdasarkan checkbox
function handleLayerCheckboxChange(checkbox, layer) {
    if (checkbox.checked) {
        layer.addTo(map); // Menampilkan lapisan marker
    } else {
        layer.removeFrom(map); // Menghilangkan lapisan marker
    }
}

// Daftar lapisan dan checkbox yang berkaitan
var layerCheckboxPairs = [
    { checkboxId: 'chachoengsao_prov', layer: chachoengsao_prov },
    { checkboxId: 'river_chachoengsao', layer: river_chachoengsao },
    { checkboxId: 'crops_chachoengsao', layer: crops_chachoengsao },
    { checkboxId: 'water_body', layer: water_body },
    { checkboxId: 'building_polygon', layer: building_polygon }
];

// Menambahkan event listener untuk setiap checkbox
layerCheckboxPairs.forEach(function (pair) {
    var checkbox = document.getElementById(pair.checkboxId);
    checkbox.addEventListener('change', function () {
        handleLayerCheckboxChange(checkbox, pair.layer);
    });
});

// search
var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing'
}).addTo(map);
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .className += ' fa-solid fa-magnifying-glass fa-xl';
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .title += 'Search for a place';

// Custom zoom control
var customZoomControl = L.control.zoom({
    position: 'bottomright'  // Set the position to bottom right
});
// Add the custom zoom control to the map
map.addControl(customZoomControl);


// Menambahkan event listener untuk checkbox
var checkboxes = document.querySelectorAll('.itemCheckbox');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        var layerName = this.getAttribute('data-layer');
        var layer = window[layerName];

        if (this.checked) {
            map.addLayer(layer);
        } else {
            map.removeLayer(layer);
        }
    });
});

// Fungsi untuk mengganti basemap
function changeBasemap(newBasemap) {
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    newBasemap.addTo(map);
}

// Daftar pilihan basemap dan elemen input yang berkaitan
var basemapOptions = [
    { name: 'openStreetMap', layer: openStreetMap },
    { name: 'googleStreetMap', layer: googleStreetMap },
    { name: 'satelliteMap', layer: satelliteMap },
    { name: 'googleHibridMap', layer: googleHibridMap },
    { name: 'openTopoMap', layer: openTopoMap },
    { name: 'esriWorldStreetMap', layer: esriWorldStreetMap },
    { name: 'esriSatelite', layer: esriSatelite },
    { name: 'googleEarth', layer: googleEarth }
];

// Loop untuk menambahkan event listener ke setiap input
basemapOptions.forEach(function (option) {
    document.querySelector('input[value="' + option.name + '"]').addEventListener('change', function () {
        changeBasemap(option.layer);
    });
});


// Memilih semua gambar basemap
var basemapImages = document.querySelectorAll('.sidebar-basemap img');

// Menambahkan event listener pada setiap gambar basemap
basemapImages.forEach(function (image) {
    image.addEventListener('click', function () {
        var radio = this.closest('label').querySelector('input[type="radio"]');
        radio.checked = true;

        var selectedBasemap = radio.value;

        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });

        switch (selectedBasemap) {
            case 'openStreetMap':
                openStreetMap.addTo(map);
                break;
            case 'googleStreetMap':
                googleStreetMap.addTo(map);
                break;
            case 'satelliteMap':
                satelliteMap.addTo(map);
                break;
            case 'googleHibridMap':
                googleHibridMap.addTo(map);
                break;
            case 'openTopoMap':
                openTopoMap.addTo(map);
                break;
            case 'esriWorldStreetMap':
                esriWorldStreetMap.addTo(map);
                break;
            case 'esriSatelite':
                esriSatelite.addTo(map);
                break;
            case 'googleEarth':
                googleEarth.addTo(map);
                break;

            default:
                break;
        }

    });
});

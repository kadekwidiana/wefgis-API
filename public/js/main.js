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

var _zoom = 10;

// Initialize the map with the default basemap
var map = L.map('map', {
    layers: [googleHibridMap],
    center: [13.666790631230649, 101.35322935835381],
    zoom: _zoom,
    minZoom: 5,
    zoomControl: false
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
// $.getJSON("/earthData", function (data) {
//     const tileLayers = {}; // Objek untuk menyimpan lapisan peta

//     // Fungsi untuk membuat dan menambahkan lapisan peta
//     function addTileLayer(key, url) {
//         const tileLayer = L.tileLayer(url);
//         tileLayer.addTo(map);
//         tileLayers[key] = tileLayer;
//     }

//     addTileLayer('tci', data.map.tci);
//     addTileLayer('vci', data.map.vci);
//     addTileLayer('vhi', data.map.vhi);

// }).fail(function (jqXHR, textStatus, error) {
//     console.log("Error: " + error);
// });

// // Event listener untuk checkbox Crop
// function toggleTileLayer(layerKey) {
//     const layer = tileLayers[layerKey];
//     if (layer) {
//         return function () {
//             if (this.checked) {
//                 layer.addTo(map); // Menampilkan lapisan peta
//             } else {
//                 layer.removeFrom(map); // Menghilangkan lapisan peta
//             }
//         };
//     }
// }

// // Mengaitkan event listener ke checkbox
// document.getElementById('tci').addEventListener('change', toggleTileLayer('tci'));
// document.getElementById('vci').addEventListener('change', toggleTileLayer('vci'));
// document.getElementById('vhi').addEventListener('change', toggleTileLayer('vhi'));

// Fungsi untuk menghancurkan grafik berdasarkan ID
function destroyChart(chartId) {
    var existingChart = Chart.getChart(chartId);
    if (existingChart) {
        existingChart.destroy();
    }
}


$(document).ready(function () {
    $("#reqInfo").click(function () {
        // Mengambil nilai dari input geometry dan type
        var geometryValue = $("#geometry").val();
        var typeValue = $('#type').val();
        var inputStartYear = $('#startYear').val();
        var inputEndYear = $('#endYear').val();

        // Mendapatkan CSRF token dari meta tag HTML
        var csrfToken = $('meta[name="csrf-token"]').attr('content');

        // Data yang akan dikirim dalam permintaan POST
        var postData = {
            geometry: geometryValue,
            type: typeValue,
            startYear: inputStartYear,
            endYear: inputEndYear
        };

        postData._token = csrfToken;

        $('#loadingPrecipitation, #loadingVCI, #loadingEVI, #loadingMSI').removeClass('d-none');
        $('#grafikPrecipitation, #grafikVCI, #grafikEVI, #grafikMSI').addClass('d-none');
        $('#getInfo').addClass('d-none');
        $('#loadInfo').removeClass('d-none');

        // Fungsi untuk mengambil data dan membuat chart
        function fetchDataAndCreateChart(url, responseKey, chartTitle, canvasId, layerMapGEE, idCheckBox) {
            $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify(postData),
                contentType: "application/json",
                success: function (response) {
                    switch (responseKey) {
                        case 'precipitation':
                            $('#loadingPrecipitation').addClass('d-none');
                            $('#grafikPrecipitation, #precipitation_id').removeClass('d-none');
                            break;
                        case 'VCI':
                            $('#loadingVCI').addClass('d-none');
                            $('#grafikVCI, #vci_id').removeClass('d-none');
                            break;
                        case 'EVI':
                            $('#loadingEVI').addClass('d-none');
                            $('#grafikEVI, #evi_id').removeClass('d-none');
                            break;
                        case 'MSI':
                            $('#loadingMSI').addClass('d-none');
                            $('#grafikMSI, #msi_id').removeClass('d-none');
                            $('#getInfo').removeClass('d-none');
                            $('#loadInfo').addClass('d-none');
                            break;
                        default:
                            break;
                    }


                    destroyChart(canvasId);
                    console.log(response.map[layerMapGEE]);
                    if (responseKey === 'VCI') {
                        var vciLayer = L.tileLayer(response.map.VCI);
                        if ($('#' + idCheckBox).is(':checked')) {
                            vciLayer.addTo(map); // Menampilkan lapisan VCI jika checkbox sudah dicentang
                        }
                        $('#' + idCheckBox).on('change', function () {
                            if (this.checked) {
                                vciLayer.addTo(map); // Menampilkan lapisan VCI saat checkbox dicentang
                            } else {
                                vciLayer.removeFrom(map); // Menghilangkan lapisan VCI saat checkbox dicentang
                            }
                        });
                    }

                    var layerMapFromGEE = L.tileLayer(response.map[layerMapGEE]);


                    $('#' + idCheckBox).on('change', function () {
                        if (this.checked) {
                            layerMapFromGEE.addTo(map); // Menampilkan lapisan layer
                        } else {
                            layerMapFromGEE.removeFrom(map); // Menghilangkan lapisan layer
                        }
                    });

                    var monthlyData = response.data;
                    var dataKey = responseKey;

                    var dataArray = [];
                    for (var i = 0; i < monthlyData.length; i++) {
                        var value = monthlyData[i][dataKey];
                        dataArray.push(value);
                    }

                    var yearlyData = {};
                    for (var i = 0; i < monthlyData.length; i++) {
                        var year = monthlyData[i].Year || monthlyData[i].year;
                        var value = monthlyData[i][dataKey];

                        if (!yearlyData.hasOwnProperty(year)) {
                            yearlyData[year] = [];
                        }

                        yearlyData[year].push(value);
                    }

                    // Function to generate a random color
                    function getRandomColor() {
                        var letters = '0123456789ABCDEF';
                        var color = '#';
                        for (var i = 0; i < 6; i++) {
                            color += letters[Math.floor(Math.random() * 16)];
                        }
                        return color;
                    }

                    var datasets = [];
                    var colorMap = {
                        '2018': 'yellow',
                        '2019': 'orange',
                        '2020': 'red',
                        '2021': 'green',
                        '2022': 'blue'
                    };
                    for (var year in yearlyData) {
                        if (yearlyData.hasOwnProperty(year)) {
                            var color = colorMap[year];
                            datasets.push({
                                label: year,
                                data: yearlyData[year],
                                backgroundColor: color,
                                borderColor: color,
                                borderWidth: 1,
                            });
                        }
                    }

                    // var markerIndex = data[index].id;

                    var ctx = document.getElementById(canvasId).getContext('2d');
                    var chart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            datasets: datasets,
                        },
                        options: {
                            responsive: true,
                            scales: {
                                x: {
                                    beginAtZero: true,
                                    maxTicksLimit: 12,
                                },
                                y: {
                                    min: (responseKey === 'EVI' || responseKey === 'MSI') ? Math.min(...dataArray) - 1 : Math.min(...dataArray) - 10,
                                    max: (responseKey === 'EVI' || responseKey === 'MSI') ? Math.max(...dataArray) + 1 : Math.max(...dataArray) + 50,
                                    beginAtZero: true,
                                }
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: chartTitle,
                                    position: 'top'
                                },
                                legend: {
                                    display: true,
                                    position: 'right',
                                    labels: {
                                        usePointStyle: true,
                                        pointStyle: 'circle',
                                        pointRadius: 8,
                                    }
                                }
                            }
                        }
                    });
                },
                error: function (error) {
                    console.log("Fail:", error);
                    $('#getInfo').removeClass('d-none');
                    $('#loadInfo').addClass('d-none');
                    switch (responseKey) {
                        case 'precipitation':
                            $('#loadingPrecipitation').addClass('d-none');
                            $('#failedGetPrecipitation').removeClass('d-none');
                            break;
                        case 'VCI':
                            $('#loadingVCI').addClass('d-none');
                            $('#failedGetVCI').removeClass('d-none');
                            break;
                        case 'EVI':
                            $('#loadingEVI').addClass('d-none');
                            $('#failedGetEVI').removeClass('d-none');
                            break;
                        case 'MSI':
                            $('#loadingMSI').addClass('d-none');
                            $('#failedGetMSI').removeClass('d-none');
                            break;
                        default:
                            break;
                    }
                }
            });
        }
        // Pemanggilan fungsi untuk endpoint
        fetchDataAndCreateChart("/precipitation", "precipitation", "Cumulative Rainfall (mm)", "chartRequestPrecipitation", "Precipitation", "precipitation_id");
        fetchDataAndCreateChart("/vci", "VCI", "VCI", "chartRequestVci", "VCI", "vci_id");
        fetchDataAndCreateChart("/evi", "EVI", "EVI", "chartRequestEvi", "EVI", "evi_id");
        fetchDataAndCreateChart("/evi", "MSI", "MSI", "chartRequestMsi", "MSI", "msi_id");
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

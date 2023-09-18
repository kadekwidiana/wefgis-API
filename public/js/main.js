// Basemaps
const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap Contributors',
});

const googleStreetMap = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '©Google StreetMap',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

const satelliteMap = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: '©Google Satellite Map',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

const googleHibridMap = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
    attribution: '©Google Hybrid Map',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

const googleTerrain = L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '©Google Terrain'
});

const googleTraffic = L.tileLayer('http://{s}.google.com/vt/lyrs=m,traffic&hl=en&x={x}&y={y}&z={z}&s=Ga', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '©Google Traffic'
});

const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '©OpenTopoMap Contributors',

});
const esriSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '©<a href="https://www.esri.com">Esri Satelite</a>',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});
const esriWorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '©<a href="https://www.esri.com">Esri Street</a>',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});
const googleEarth = L.tileLayer('https://storage.googleapis.com/global-surface-water/tiles2021/transitions/{z}/{x}/{y}.png', {
    attribution: '©<a href="https://www.thunderforest.com/maps/landscape/">Thunderforest</a>',
});

const _zoom = 10;

// Initialize the map with the default basemap
const map = L.map('map', {
    layers: googleHibridMap,
    center: [13.666790631230649, 101.35322935835381],
    zoom: _zoom,
    minZoom: 5,
    zoomControl: false
});

//basemap Google Maps Label
const googleMapsLabel = L.tileLayer('https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/6e20dcda0306d1612c1c93896fabf4bd-3812d50f5e3a412f3e1a16d9f1970210/tiles/%7Bz%7D/%7Bx%7D/%7By%7D', {
    attribution: '©<a href="https://www.google.com/maps">Google Maps Label</a>',
});

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
        if (layer !== newBasemap) {
            map.removeLayer(layer);
        }
    });
    newBasemap.addTo(map);
}

// Daftar pilihan basemap dan elemen input yang berkaitan
const basemapOptions = [
    { name: 'openStreetMap', layer: openStreetMap },
    { name: 'googleStreetMap', layer: googleStreetMap },
    { name: 'satelliteMap', layer: satelliteMap },
    { name: 'googleHibridMap', layer: googleHibridMap },
    { name: 'googleTerrain', layer: googleTerrain },
    { name: 'googleTraffic', layer: googleTraffic },
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
const basemapImages = document.querySelectorAll('.sidebar-basemap img');

// Menambahkan event listener pada setiap gambar basemap
basemapImages.forEach(function (image) {
    image.addEventListener('click', function () {
        const radio = this.closest('label').querySelector('input[type="radio"]');
        radio.checked = true;

        const selectedBasemap = radio.value;

        // Hapus basemap yang tidak terpilih
        basemapOptions.forEach(function (option) {
            if (option.name !== selectedBasemap) {
                map.removeLayer(option.layer);
            }
        });

        // Tambahkan basemap yang terpilih
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
            case 'googleTerrain':
                googleTerrain.addTo(map);
                break;
            case 'googleTraffic':
                googleTraffic.addTo(map);
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
    const existingChart = Chart.getChart(chartId);
    if (existingChart) {
        existingChart.destroy();
    }
}
$(document).ready(function () {
    $("#reqInfo").click(function () {
        // Mengambil nilai dari input geometry dan type
        const geometryValue = $("#geometry").val();
        const typeValue = $('#type').val();
        const inputStartYear = $('#startYear').val();
        const inputEndYear = $('#endYear').val();

        // Mendapatkan CSRF token dari meta tag HTML
        const csrfToken = $('meta[name="csrf-token"]').attr('content');

        // Data yang akan dikirim dalam permintaan POST
        const postData = {
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

        // Func untuk mengambil data dan membuat chart
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
                    console.log(response.map);

                    // Mengatur ulang objek response.map menjadi objek kosong

                    // response.map = {};
                    const layerMapFromGEE = L.tileLayer(response.map[layerMapGEE]);


                    if ($('#' + idCheckBox).is(':checked')) {
                        layerMapFromGEE.addTo(map); // Menampilkan lapisan VCI jika checkbox sudah dicentang
                    }
                    $('#' + idCheckBox).on('change', function () {
                        if (this.checked) {
                            layerMapFromGEE.addTo(map); // Menampilkan lapisan layer
                        } else {
                            layerMapFromGEE.removeFrom(map); // Menghilangkan lapisan layer
                        }
                    });

                    const monthlyData = response.data;
                    const dataKey = responseKey;

                    const dataArray = [];
                    for (let i = 0; i < monthlyData.length; i++) {
                        const value = monthlyData[i][dataKey];
                        dataArray.push(value);
                    }

                    const yearlyData = {};
                    for (let i = 0; i < monthlyData.length; i++) {
                        const year = monthlyData[i].Year || monthlyData[i].year;
                        const value = monthlyData[i][dataKey];

                        if (!yearlyData.hasOwnProperty(year)) {
                            yearlyData[year] = [];
                        }

                        yearlyData[year].push(value);
                    }

                    // Function to generate a random color
                    function getRandomColor() {
                        const letters = '0123456789ABCDEF';
                        const color = '#';
                        for (const i = 0; i < 6; i++) {
                            color += letters[Math.floor(Math.random() * 16)];
                        }
                        return color;
                    }

                    const datasets = [];
                    const colorMap = {
                        '2018': 'yellow',
                        '2019': 'orange',
                        '2020': 'red',
                        '2021': 'green',
                        '2022': 'blue'
                    };
                    for (const year in yearlyData) {
                        if (yearlyData.hasOwnProperty(year)) {
                            const color = colorMap[year];
                            datasets.push({
                                label: year,
                                data: yearlyData[year],
                                backgroundColor: color,
                                borderColor: color,
                                borderWidth: 1,
                            });
                        }
                    }

                    // const markerIndex = data[index].id;

                    const ctx = document.getElementById(canvasId).getContext('2d');
                    const chart = new Chart(ctx, {
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

// search
const osmGeocoder = new L.Control.Geocoder({
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
const customZoomControl = L.control.zoom({
    position: 'bottomright'  // Set the position to bottom right
});
// Add the custom zoom control to the map
map.addControl(customZoomControl);


// Menambahkan event listener untuk checkbox
const checkboxes = document.querySelectorAll('.itemCheckbox');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const layerName = this.getAttribute('data-layer');
        const layer = window[layerName];

        if (this.checked) {
            map.addLayer(layer);
        } else {
            map.removeLayer(layer);
        }
    });
});

// WATER GEE
// Inisialisasi objek untuk menyimpan tile layer dan layer group
const layersConfig = {
    ChangeIntensity: {
        id: 'change_intensity',
        mapKey: 'ChangeIntensity',
        layerGroup: L.layerGroup(),
        tileLayer: null, // Menambahkan properti tileLayer
    },
    IGBP: {
        id: 'igbp',
        mapKey: 'IGBP',
        layerGroup: L.layerGroup(),
        tileLayer: null, // Menambahkan properti tileLayer
    },
    LST: {
        id: 'lst',
        mapKey: 'LST',
        layerGroup: L.layerGroup(),
        tileLayer: null, // Menambahkan properti tileLayer
    },
    Occurrence: {
        id: 'occurrence',
        mapKey: 'Occurrence',
        layerGroup: L.layerGroup(),
        tileLayer: null, // Menambahkan properti tileLayer
    },
    Water: {
        id: 'water',
        mapKey: 'Chachoengsao',
        layerGroup: L.layerGroup(),
        tileLayer: null, // Menambahkan properti tileLayer
    },
    WaterSeason: {
        id: 'water_season',
        mapKey: 'WaterSeason',
        layerGroup: L.layerGroup(),
        tileLayer: null, // Menambahkan properti tileLayer
    },
};

// Fungsi untuk membuat tile layer dan menambahkannya ke layer group
function createAndAddTileLayer(mapKey, layerGroup, url) {
    const tileLayer = L.tileLayer(url);
    tileLayer.addTo(layerGroup);
    layersConfig[mapKey].tileLayer = tileLayer;
}

// Fungsi untuk menangani perubahan status checkbox
function handleCheckboxChange(mapKey) {
    const { layerGroup, tileLayer } = layersConfig[mapKey];
    return function () {
        if (this.checked) {
            layerGroup.addTo(map);
            if (tileLayer === null) {
                // Hanya ambil data jika tileLayer belum ada
                $.getJSON("/wateroccurence", function (data_map) {
                    const url = data_map.map[layersConfig[mapKey].mapKey];
                    createAndAddTileLayer(mapKey, layerGroup, url);
                }).fail(function (jqXHR, textStatus, error) {
                    // console.log("Error: " + error);
                });
            }
        } else {
            layerGroup.removeFrom(map);
        }
    };
}

// Tambahkan event listener ke checkbox saat dokumen siap
$(document).ready(function () {
    for (const mapKey in layersConfig) {
        document.getElementById(layersConfig[mapKey].id).addEventListener('change', handleCheckboxChange(mapKey));
    }
});
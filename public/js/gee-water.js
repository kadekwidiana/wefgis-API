// WATER GEE
// Inisialisasi objek untuk menyimpan tile layer dan layer group
const layersConfig = {
    ChangeIntensity: {
        id: 'change_intensity',
        mapKey: 'ChangeIntensity',
        layerGroup: L.layerGroup(),
    },
    IGBP: {
        id: 'igbp',
        mapKey: 'IGBP',
        layerGroup: L.layerGroup(),
    },
    LST: {
        id: 'lst',
        mapKey: 'LST',
        layerGroup: L.layerGroup(),
    },
    Occurrence: {
        id: 'occurrence',
        mapKey: 'Occurrence',
        layerGroup: L.layerGroup(),
    },
    Water: {
        id: 'water',
        mapKey: 'Water',
        layerGroup: L.layerGroup(),
    },
    WaterSeason: {
        id: 'water_season',
        mapKey: 'WaterSeason',
        layerGroup: L.layerGroup(),
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
        } else {
            layerGroup.removeFrom(map);
        }
    };
}

// Earth data
$.getJSON("/water-occurrences", function (data_map) {
    for (const mapKey in layersConfig) {
        const url = data_map.map[layersConfig[mapKey].mapKey];
        createAndAddTileLayer(mapKey, layersConfig[mapKey].layerGroup, url);
        document.getElementById(layersConfig[mapKey].id).addEventListener('change', handleCheckboxChange(mapKey));
    }
}).fail(function (jqXHR, textStatus, error) {
    console.log("Error: " + error);
});
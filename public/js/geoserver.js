// LAYER GEOSERVER
const baseUrlGeo = 'http://localhost:8080/geoserver';

// geoserver layer
const chachoengsao_prov = L.layerGroup();
const river_chachoengsao = L.layerGroup();
const crops_chachoengsao = L.layerGroup();
const water_body = L.layerGroup();
const building_polygon = L.layerGroup();
const admin_phichit = L.layerGroup();
const agriculture_phichit = L.layerGroup();
const change_phichit = L.layerGroup();
const MS1 = L.layerGroup();
const rail_phichit = L.layerGroup();

// Fungsi untuk menambahkan WMS layer dengan konfigurasi yang diberikan
function addWMSToMap(url, layerName, targetLayer) {
    const wms_layer = L.tileLayer.wms(url, {
        layers: layerName,
        format: 'image/png',
        transparent: true,
    });
    wms_layer.addTo(targetLayer);
}

// Panggil fungsi untuk menambahkan WMS layer ke dalam lapisan tertentu
addWMSToMap(`${baseUrlGeo}/river_thailand/wms`, 'river_thailand:prov_chachoengsao', chachoengsao_prov);
addWMSToMap(`${baseUrlGeo}/river_thailand/wms`, 'river_thailand:river-chachoengsao', river_chachoengsao);
addWMSToMap(`${baseUrlGeo}/river_thailand/wms`, 'river_thailand:crops-point', crops_chachoengsao);
addWMSToMap(`${baseUrlGeo}/geo_tiff/wms`, 'geo_tiff:occurrence_100E_20Nv1_4_2021(1)', water_body);
addWMSToMap(`${baseUrlGeo}/thailand_service/wms`, 'thailand_service:building', building_polygon);
// PHICHIT PROVINCE
addWMSToMap(`${baseUrlGeo}/phichit_province/wms`, 'phichit_province:admin', admin_phichit);
addWMSToMap(`${baseUrlGeo}/phichit_province/wms`, 'phichit_province:agriculture', agriculture_phichit);
addWMSToMap(`${baseUrlGeo}/phichit_province/wms`, 'phichit_province:chang_line', change_phichit);
addWMSToMap(`${baseUrlGeo}/phichit_province/wms`, 'phichit_province:MS1', MS1);
addWMSToMap(`${baseUrlGeo}/phichit_province/wms`, 'phichit_province:Rail', rail_phichit);


// Fungsi untuk mengatur tampilan lapisan berdasarkan checkbox
function handleLayerCheckboxChange(checkbox, layer) {
    if (checkbox.checked) {
        layer.addTo(map); // Menampilkan lapisan marker
    } else {
        layer.removeFrom(map); // Menghilangkan lapisan marker
    }
}

// Daftar lapisan dan checkbox
const layerCheckboxPairs = [
    { checkboxId: 'chachoengsao_prov', layer: chachoengsao_prov },
    { checkboxId: 'river_chachoengsao', layer: river_chachoengsao },
    { checkboxId: 'crops_chachoengsao', layer: crops_chachoengsao },
    { checkboxId: 'water_body', layer: water_body },
    { checkboxId: 'building_polygon', layer: building_polygon },
    // Nakhon Phatom Province
    { checkboxId: 'admin_phichit', layer: admin_phichit },
    { checkboxId: 'agriculture_phichit', layer: agriculture_phichit },
    { checkboxId: 'change_line_phichit', layer: change_phichit },
    { checkboxId: 'MS1_phichit', layer: MS1 },
    { checkboxId: 'rail_phichit', layer: rail_phichit },
];

// event listener checkbox
layerCheckboxPairs.forEach(function (pair) {
    const checkbox = document.getElementById(pair.checkboxId);
    checkbox.addEventListener('change', function () {
        handleLayerCheckboxChange(checkbox, pair.layer);
    });
});

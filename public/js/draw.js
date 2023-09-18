// Layer draw
const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
const drawControl = new L.Control.Draw({
    position: 'topleft',
    draw: {
        polygon: {
            shapeOptions: {
                color: 'green', // Warna border polygon
                fillColor: 'rgba(0, 0, 0, 0.5)' // Warna fill polygon (biru transparan)
            },
            allowIntersection: false,
            drawError: {
                color: 'orange',
                timeout: 1000
            },
            showArea: true,
            metric: false,
            repeatMode: true
        }
        ,
        polyline: false,
        circlemarker: false, //circlemarker type has been disabled.
        rect: false,
        circle: false,
        rectangle: false

    },
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

// create data geojson
map.on('draw:created', function (e) {
    const type = e.layerType,
        layer = e.layer;
    drawnItems.addLayer(layer);

    if (type === 'marker') {
        // Extract coordinates and altitude from the layer options
        const coordinates = layer.getLatLng();
        const lat = coordinates.lat;
        const lng = coordinates.lng;

        // Add coordinates and altitude to respective HTML elements
        $('#geometry').val("[" + lng + "," + lat + "]");
        $('#type').val('point');
    }

    if (type == 'polygon') {
        const coordinates = layer.toGeoJSON().geometry.coordinates;
        $('#geometry').val(JSON.stringify(coordinates));

        $('#type').val('polygon');

        // Calculate and display the area
        const area = turf.area(layer.toGeoJSON());
        document.getElementById('area').value = area.toFixed(2);
    }

});

// edit data geojson
map.on('draw:edited', function (e) {
    const editedLayers = e.layers;
    editedLayers.eachLayer(function (layer) {
        const type = layer instanceof L.Marker ? 'marker' : 'polygon'; // Determine the edited shape type

        if (type === 'marker') {
            // Extract coordinates and altitude from the layer options
            const coordinates = layer.getLatLng();
            const lat = coordinates.lat;
            const lng = coordinates.lng;

            // Add coordinates and altitude to respective HTML elements
            $('#geometry').val("[" + lng + "," + lat + "]");
            $('#type').val('Point');
        }

        if (type == 'polygon') {
            const coordinates = layer.toGeoJSON().geometry.coordinates;
            $('#geometry').val(JSON.stringify(coordinates));

            $('#type').val('polygon');

            // Calculate and display the area
            const area = turf.area(layer.toGeoJSON());
            document.getElementById('area').value = area.toFixed(2);
        }
    });
});

// delete data geojson
map.on('draw:deleted', function (e) {
    const deletedLayers = e.layers;
    deletedLayers.eachLayer(function (layer) {
        $('#geometry').val('');
        $('#type').val('');
    });
});
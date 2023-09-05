// LAYER MARKER CROP
// Fungsi event listener untuk checkbox
function checkboxEventListener(checkboxId, layer) {
    document.getElementById(checkboxId).addEventListener('change', function () {
        if (this.checked) {
            layer.addTo(map); // Menampilkan lapisan marker
        } else {
            layer.removeFrom(map); // Menghilangkan lapisan marker
        }
    });
}

// Panggil fungsi untuk setiap checkbox dan layer
checkboxEventListener('point_corn', crop);
checkboxEventListener('point_paddy', paddy);
checkboxEventListener('point_baresoil', baresoil);
checkboxEventListener('point_cassava', cassava);
checkboxEventListener('point_eucalyptus', eucalyptus);
checkboxEventListener('point_forest', forest);
checkboxEventListener('point_grassland', grassland);
checkboxEventListener('point_palm', palm);
checkboxEventListener('point_rubber', rubber);
checkboxEventListener('point_building', settlement);
checkboxEventListener('point_sugarcane', sugarcane);
checkboxEventListener('point_water', water);

// get data by mysql
$(document).ready(function () {
    $.getJSON('/pointCrop/json', function (data) {
        // loop class Baresoil
        // Membuat objek untuk memetakan kelas dengan ikon dan grupnya
        var classToIcon = {
            'Baresoil': { icon: baresoilIcon, group: baresoil },
            'Cassava': { icon: cassavaIcon, group: cassava },
            'Crop': { icon: cropIcon, group: crop },
            'Paddy': { icon: paddyIcon, group: paddy },
            'Eucalyptus': { icon: eucalyptusIcon, group: eucalyptus },
            'Forest': { icon: forestIcon, group: forest },
            'Grassland': { icon: grasslandIcon, group: grassland },
            'Palm': { icon: palmIcon, group: palm },
            'Rubber': { icon: rubberIcon, group: rubber },
            'Settlement': { icon: settlementIcon, group: settlement },
            'Sugarcane': { icon: sugarcaneIcon, group: sugarcane },
            'Water': { icon: waterIcon, group: water }
        };

        // Loop melalui data untuk semua kelas
        $.each(data, function (index) {
            var currentClass = data[index].class;

            if (classToIcon.hasOwnProperty(currentClass)) {
                var icon = classToIcon[currentClass].icon;
                var group = classToIcon[currentClass].group;

                var marker = L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: icon });

                var popupContent = '<div class="popup-container">';
                popupContent += '<div class="popup-header">Class: ' + data[index].class + '</div>';
                popupContent += '<div class="popup-coordinates">Coordinates: ' + data[index].latitude + ',' + data[index].longitude + '</div>';
                popupContent += '<div class="popup-address mb-2">Address: <span id="address-placeholder">Loading...</span></div>';
                popupContent += '<div class="popup-address mb-2"><a style="text-decoration: none;" href="http://maps.google.com/maps?q=&layer=c&cbll=' + data[index].latitude + ',' + data[index].longitude + '&cbp=11,0,0,0" target="_blank"><b>Street View</b></a></div>';
                popupContent += '<div id="loading-overlay"><div class="loading-spinner"></div></div>';
                popupContent += '<div id="failed">Data not found</div>';

                // Add Bootstrap tabs
                popupContent += '<ul class="nav nav-tabs justify-content-center" role="tablist">';
                popupContent += '<li class="nav-item"><a class="nav-link active" href="#chart1-' + data[index].id + '" role="tab" data-toggle="tab">Cumulative Rainfall</a></li>';
                popupContent += '<li class="nav-item"><a class="nav-link" href="#chart2-' + data[index].id + '" role="tab" data-toggle="tab">VCI</a></li>';
                popupContent += '</ul>';

                popupContent += '<div class="tab-content">';
                popupContent += '<div role="tabpanel" class="tab-pane active" id="chart1-' + data[index].id + '"><canvas id="myChart1' + data[index].id + '" width="600" height="400"></canvas></div>';
                popupContent += '<div role="tabpanel" class="tab-pane" id="chart2-' + data[index].id + '"><canvas id="myChart2' + data[index].id + '" width="600" height="400"></canvas></div>';
                popupContent += '</div>';

                popupContent += '</div>';
                var popup = L.popup().setContent(popupContent);

                marker.addTo(group).bindPopup(popup);

                marker.on('click', function () {
                    var addressPlaceholder = document.getElementById('address-placeholder');

                    $.getJSON(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${data[index].latitude}&lon=${data[index].longitude}&zoom=18&addressdetails=1`, function (data) {
                        var address = data.display_name;
                        addressPlaceholder.textContent = address;
                    });
                    $('#loading-overlay').show();
                    $('#failed').hide();

                    var postData = {
                        geometry: '[' + data[index].longitude + ',' + data[index].latitude + ']',
                        type: 'point',
                        startYear: 2020,
                        endYear: 2022
                    };

                    // Fungsi untuk mengambil data dan membuat chart
                    function fetchDataAndCreateChart(url, responseKey, chartTitle, canvasId) {
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: JSON.stringify(postData),
                            contentType: "application/json",
                            success: function (response) {
                                $('#loading-overlay').hide();
                                var monthlyData = response.data;
                                var dataKey = responseKey;

                                var dataArray = [];
                                for (var i = 0; i < monthlyData.length; i++) {
                                    var value = monthlyData[i][dataKey];
                                    dataArray.push(value);
                                }

                                var yearlyData = {};
                                for (var i = 0; i < monthlyData.length; i++) {
                                    var year = monthlyData[i].Year || monthlyData[i].year; // Adjust based on your response structure
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
                                for (var year in yearlyData) {
                                    if (yearlyData.hasOwnProperty(year)) {
                                        var color = getRandomColor();
                                        datasets.push({
                                            label: year,
                                            data: yearlyData[year],
                                            backgroundColor: color,
                                            borderColor: color,
                                            borderWidth: 1,
                                        });
                                    }
                                }

                                var markerIndex = data[index].id;

                                var ctx = document.getElementById(canvasId + markerIndex).getContext('2d');
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
                                                min: 0,
                                                max: Math.max(...dataArray) + 100,
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
                                                position: 'bottom',
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
                                $('#loading-overlay').hide();
                                $('#failed').show();
                            }
                        });
                    }
                    // Pemanggilan fungsi untuk kedua endpoint
                    fetchDataAndCreateChart("/water-preception", "precipitation", "Cumulative Rainfall (mm)", "myChart1");
                    fetchDataAndCreateChart("/vci", "VCI", "VCI (mm)", "myChart2");
                });
            }
        });
    });
});
var myMap = L.map('mapid').setView([-27.467, 153.033], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2F5bGVlc3B5IiwiYSI6ImNrdHFtbnU1MTB4cnMyb2w0NTE0bHNtdHQifQ.EmIQuBNFf9MLO5pXPCPKOw'
}).addTo(myMap);






$(document).ready(function() {

    var data = {
        resource_id: "b257b4db-8618-4bc0-be9c-8084d936d765",
        limit: 100
    }

    $.ajax({
        url: "https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search",
        data: data,
        dataType: "jsonp",
        cache: true,
        success: function(results) {
            iterateRecords(results);
        }
    });

});
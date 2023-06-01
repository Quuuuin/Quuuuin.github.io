//reference Week6 exercise2 and https://leafletjs.com

//maker icons setting
var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'Images&Files/marker-shadow.png',
            iconSize: [25, 25],
            shadowSize: [35, 35],
        }
    }),
    turcksIcon = L.Icon.extend({
        options: {
            shadowUrl: 'Images&Files/marker-shadow.png',
            iconSize: [55, 55],
            shadowSize: [15, 15],
        }
    });

var ferryIcon = new LeafIcon({
        iconUrl: 'Images&Files/ferry.png'
    }),
    busIcon = new LeafIcon({
        iconUrl: 'Images&Files/bus.png'
    }),
    burgerIcon = new turcksIcon({
        iconUrl: 'Images&Files/burger.png'
    }),
    pizzaIcon = new turcksIcon({
        iconUrl: 'Images&Files/pizza.svg',
        iconSize: [50, 50],
    }),
    sweetIcon = new turcksIcon({
        iconUrl: 'Images&Files/sweet.png',
        iconSize: [85, 85],
    }),
    othersIcon = new turcksIcon({
        iconUrl: 'Images&Files/others.png',
        iconSize: [65, 65],
    });

//create ferry layer 
var ferry = L.layerGroup(),
    //bus layer 
    busStop = L.layerGroup(),
    //food truck layer 
    truck = L.layerGroup(),
    pizza = L.layerGroup(),
    burger = L.layerGroup(),
    others = L.layerGroup(),
    sweet = L.layerGroup();

//map  
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F5bGVlc3B5IiwiYSI6ImNrdHFtbnU1MTB4cnMyb2w0NTE0bHNtdHQifQ.EmIQuBNFf9MLO5pXPCPKOw';

var map = L.map('mapid', {
    center: [-27.467, 153.033],
    zoom: 11.9,
    layers: [ferry, busStop, truck]
});

L.tileLayer(mbUrl, {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr
}).addTo(map);


//connect ferry terminal API
function ferryRecords(ferryResults) {
    console.log(ferryResults);

    $.each(ferryResults.result.records, function(recordIDFerry, recordValueFerry) {

        var recordLatitudef = recordValueFerry["LATITUDE"];
        var recordLongitudef = recordValueFerry["LONGITUDE"];

        if (recordLatitudef) {
            if (recordLongitudef) {
                var marker = L.marker([recordLatitudef, recordLongitudef], {
                    icon: ferryIcon
                }).addTo(ferry);

                popupText = "<strong>" + recordValueFerry["DESCRIPTION"] + "</strong><br>" + "in " + recordValueFerry["STREETNAME"] + "<br>suburb: " + recordValueFerry["SUBURB"];
                marker.bindPopup(popupText).openPopup();
            }
        }
    });
}

var index = 0;
//connect bus stop API
function busRecords(busResults) {
    console.log(busResults);

    $.each(busResults.result.records, function(recordID, recordValue) {

        var recordLatitude = recordValue["LATITUDE"];
        var recordLongitude = recordValue["LONGITUDE"];
        if (recordLatitude <= -27.442236 && recordLatitude >= -27.4789447 && recordLongitude <= 153.0517297 && recordLongitude >= 152.9547911) {
            if (index % 15 == 0) {
                if (recordLatitude) {
                    if (recordLongitude) {
                        var marker = L.marker([recordLatitude, recordLongitude], {
                            icon: busIcon
                        }).addTo(busStop);

                        if (recordValue["NEAREST_CROSS_STREET"] == "") {
                            popupText = "<strong>" + recordValue["DESCRIPTION"] + "</strong><br>" + "in " + recordValue["STREET_NAME"] + "<br>" + "nearest cross street: None";
                        } else {
                            popupText = "<strong>" + recordValue["DESCRIPTION"] + "</strong><br>" + "in " + recordValue["STREET_NAME"] + "<br>" + "nearest cross street: " + recordValue["NEAREST_CROSS_STREET"];
                        }
                        marker.bindPopup(popupText).openPopup();
                    }
                }
            }
        } else {
            if (index % 50 == 0) {
                if (recordLatitude) {
                    if (recordLongitude) {
                        var marker = L.marker([recordLatitude, recordLongitude], {
                            icon: busIcon
                        }).addTo(busStop);

                        if (recordValue["NEAREST_CROSS_STREET"] == "") {
                            popupText = "<strong>" + recordValue["DESCRIPTION"] + "</strong><br>" + "in " + recordValue["STREET_NAME"] + "<br>" + "nearest cross street: None";
                        } else {
                            popupText = "<strong>" + recordValue["DESCRIPTION"] + "</strong><br>" + "in " + recordValue["STREET_NAME"] + "<br>" + "nearest cross street: " + recordValue["NEAREST_CROSS_STREET"];
                        }
                        marker.bindPopup(popupText).openPopup();
                    }
                }
            }
        }
        index++;
    });

}

//connect food truck API
function truckRecords(data) {
    console.log(data);

    $.each(data.result.records, function(recordID, recordValue) {
        var recordLatitude = recordValue["LATITUDE"],
            recordLongitude = recordValue["LONGITUDE"],
            recordStart = recordValue["start"],
            recordFinish = recordValue["finish"],
            recordName = recordValue["name"],
            recordAddress = recordValue["Address"],
            recordType = recordValue["category"];

        //all food display on the "truck" layer
        // different icons of different types of food
        if (recordType == "Pizza") {
            var marker = L.marker([recordLatitude, recordLongitude], {
                icon: pizzaIcon
            }).addTo(truck);
        } else if (recordType == "Dessert / Sweet") {
            var marker = L.marker([recordLatitude, recordLongitude], {
                icon: sweetIcon
            }).addTo(truck);
        } else if (recordType == "American") {
            var marker = L.marker([recordLatitude, recordLongitude], {
                icon: burgerIcon
            }).addTo(truck);
        } else {
            var marker = L.marker([recordLatitude, recordLongitude], {
                icon: othersIcon
            }).addTo(truck);
        }

        popupText = "<strong>" + recordName + "</strong><br>" + "From " + recordStart + "<br>" + "To " +
            recordFinish + "<br>" + "Address: " + recordAddress;

        marker.bindPopup(popupText).openPopup();

        // food filter implement
        if (recordType == "Pizza") {
            var markerB = L.marker([recordLatitude, recordLongitude], {
                icon: pizzaIcon
            }).addTo(pizza);
        } else if (recordType == "Dessert / Sweet") {
            var markerB = L.marker([recordLatitude, recordLongitude], {
                icon: sweetIcon
            }).addTo(sweet);
        } else if (recordType == "American") {
            var markerB = L.marker([recordLatitude, recordLongitude], {
                icon: burgerIcon
            }).addTo(burger);
        } else {
            var markerB = L.marker([recordLatitude, recordLongitude], {
                icon: othersIcon
            }).addTo(others);
        }

        popupTextB = "<strong>" + recordName + "</strong><br>" + "From " + recordStart + "<br>" + "To " +
            recordFinish + "<br>" + "Address: " + recordAddress;

        markerB.bindPopup(popupTextB).openPopup();
    });

}

// control layers of map
var layer = {
    "Bus": busStop,
    "Ferry": ferry,
    "truck": truck,
}

L.control.layers(null, layer).addTo(map);

//API
$(document).ready(function() {

    //Ferry Terminal locations 
    var ferryData = {
        resource_id: "bdffec72-f4b5-4107-b7e3-751652af28f2",
        limit: 100
    }

    $.ajax({
        url: "https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search",
        data: ferryData,
        dataType: "jsonp",
        cache: true,
        success: function(ferryResults) {
            ferryRecords(ferryResults);
        }
    });

    //bus stops
    var busData = {
        resource_id: "0c4fda19-f96a-4174-a821-be6dad2e45cf",
        limit: 5000
    }

    $.ajax({
        url: "https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search",
        data: busData,
        dataType: "jsonp",
        cache: true,
        success: function(busResults) {
            busRecords(busResults);
        }
    });

    //truck
    $.ajax({
        url: "json/combine.json",
        data: {},
        dataType: 'json',
        cache: true,
        success: function(data) {
            truckRecords(data);
            foodType(data);
        }
    });

});

// Filter display

document.addEventListener("readystatechange", function(event) {
    if (event.target.readyState == "interactive") {

        var drop_btn = document.querySelector("#filter-btn");
        var close_btn = document.querySelector("#close-filter");
        var drop_content = document.querySelector("#filter");
        var filter_btn = document.querySelector("#filter-btn");

        drop_btn.onclick = function drop() {
            drop_content.classList.toggle("show");
            filter_btn.classList.toggle("show");
        }

        close_btn.onclick = function drop() {
            drop_content.classList.toggle("show");
            filter_btn.classList.toggle("show");
        }

    }
});

// filter select all & select no one

document.addEventListener("readystatechange", function(event) {
    if (event.target.readyState == "interactive") {

        var type_all = document.querySelector("#type-all");
        var type_none = document.querySelector("#type-none");
        var type = document.getElementsByName("food-type");
        var safety = document.getElementsByName("food-safety");
        var flow = document.getElementsByName("passenger-flow");

        type_all.onclick = function selectAll() {
            for (var i = 0; i < type.length; i++) {
                type[i].checked = true;
            }
            for (var i = 0; i < safety.length; i++) {
                safety[i].checked = true;
            }
            for (var i = 0; i < flow.length; i++) {
                flow[i].checked = true;
            }
        }

        type_none.onclick = function selectNone() {
            for (var i = 0; i < type.length; i++) {
                type[i].checked = false;
            }
            for (var i = 0; i < safety.length; i++) {
                safety[i].checked = false;
            }
            for (var i = 0; i < flow.length; i++) {
                flow[i].checked = false;
            }
        }

    }
});

// Filter form submit

document.addEventListener("readystatechange", function(event) {
    if (event.target.readyState == "interactive") {

        document.addEventListener("submit", function(event) {

            // get value from the form
            var type_value = [];
            var type = document.getElementsByName("food-type");
            for (var i = 0; i < type.length; i++) {
                if (type[i].checked) {
                    type_value.push(type[i].value);
                }
            }
            var safety_value = null;
            var safety = document.getElementsByName("food-safety");
            for (var i = 0; i < safety.length; i++) {
                if (safety[i].checked) {
                    safety_value = safety[i].value;
                }
            }
            var flow_value = null;
            var flow = document.getElementsByName("passenger-flow");
            for (var i = 0; i < flow.length; i++) {
                if (flow[i].checked) {
                    flow_value = flow[i].value;
                }
            }

            // each attribute should be selected
            if (type_value == null && safety_value == null && flow_value == null) {

                alert("You should select at least one value!");
                event.preventDefault(); // avoid page jumping 

            } else {
                event.preventDefault(); // avoid page jumping 

                // food type filter
                // remove all layers at first
                map.removeLayer(truck);
                map.removeLayer(pizza);
                map.removeLayer(sweet);
                map.removeLayer(others);
                map.removeLayer(burger);

                // implement food truck filter
                if (type_value.length == 4) {
                    map.addLayer(truck);
                } else if (type_value.length > 0) {
                    for (var value of type_value) {
                        if (value == "burger") {
                            map.addLayer(burger);
                        } else if (value == "pizza") {
                            map.addLayer(pizza);
                        } else if (value == "dessert") {
                            map.addLayer(sweet);
                        } else {
                            map.addLayer(others);
                        }
                    }
                }



                // add filter  




                // success prompt
                var filter_prompt = document.querySelector('#filter-prompt');
                filter_prompt.style.display = "block";

                window.onclick = function close(e) {
                    filter_prompt.style.display = "none";
                }
            }
        });
    }
});



// open & close the chart demonstration page by clicking the chart icon
var chart = document.getElementById("chart-section");
chart.addEventListener("click", function() {
    document.getElementById("chart-page").style.display = "initial";
    document.getElementById("overlay").style.display = "initial";

});

var chartClose = document.getElementById("close-chart-page");
chartClose.addEventListener("click", function() {
    document.getElementById("chart-page").style.display = "none";
    document.getElementById("overlay").style.display = "none";

});


function foodType(data) {
    var arrOfAllRecordCategory = [];
    var foodType = [];
    var foodTypeOccurrence = [];

    console.log(data);

    // add each record value into  variable foodType
    $.each(data.result.records, function(recordID, recordValue) {
        var foodType = recordValue["category"];
        if (foodType == "Asian") {
            arrOfAllRecordCategory.push("others");
        } else if (foodType == "American") {
            arrOfAllRecordCategory.push("burger");

        } else {
            arrOfAllRecordCategory.push(foodType);
        }

    });
    console.log(arrOfAllRecordCategory);

    //count the occurrence of each food type
    const countOccurrences = arr => arr.reduce((prev, curr) =>
        (prev[curr] = ++prev[curr] || 1, prev), {});

    var typeOccurrence = countOccurrences(arrOfAllRecordCategory);

    foodType = Object.keys(typeOccurrence);
    foodTypeOccurrence = Object.values(typeOccurrence);

    console.log(foodType);
    console.log(foodTypeOccurrence);

    var xValues = foodType;
    var yValues = foodTypeOccurrence;
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#fcb045"
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Food Type Summary"
            }
        }
    });

}
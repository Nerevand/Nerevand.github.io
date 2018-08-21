var map, infoWindow;
function initMap() {
    var centerLatLng = new google.maps.LatLng(49.795449, 24.005525);
    var mapOptions = {
        center: centerLatLng,
        zoom: 15
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infoWindow = new google.maps.InfoWindow();  
    var latLng = new google.maps.LatLng(49.795449, 24.005525);
    addMarker(latLng);
}
function addMarker(latLng, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}
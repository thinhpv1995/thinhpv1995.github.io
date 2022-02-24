var mapLocation = new google.maps.LatLng(10.810846830064278, 106.70740745244424); //change coordinates here
var marker;
var map;
function initialize() {
    var mapOptions = {
        zoom: 14, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#f6954d"}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e3e2e2"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#a4c4c8"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
     
    //change address details here
    var contentString = '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<div class="brand" href="#"><img alt="" src="images/brand.png"><div class="brand-info"><div class="brand-name">CÔNG TY CỔ PHẦN ĐẤT XANH PREMIUM</div></div></div></div>' 
    + '<div class="map-address-row">'
    + '  <span class="text"><strong class="text-dark">152 Chu Văn An, </strong><br>'
    + '  Phường 26, Quận Bình Thạnh, T.P HCM</span>'
    + '</div>'
    + '<div>'
    + '   <span class="text"><strong class="text-dark">Phone:</strong> 0934 362 727</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <span class="map-email">'
    + '      <span class="text"><strong class="text-dark">Email:</strong> info@datxanhpremium.vn</span>'
    + '   </span>'
    + '</div>' 
    + '<p class="gmap-open"><a href="https://goo.gl/maps/KtqS5Yc5onjBPbmN9" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    // Uncomment down to show Marker
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Bauhaus', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });



    // Uncomment down to show info window on marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}


var citySearch = [ //hardcoded cities to search for
  {1: [
    {city: 'Barcelona'} ]},
  {2: [
    {city: 'Pyongyang'} ]},
  {3: [
    {city: 'Paris'} ]},
  {4: [
    {city: 'New York'} ]},
  {5: [
    {city: 'Salt Lake City'} ]},
  {6: [
    {city: 'Coopenhagen'} ]},
  {7: [
    {city: 'Liverpool'} ]},
  {8: [
    {city: 'Brisbane'} ]}
];
var map;
var service; //places search service

function initMap() { //the search function for getting an airport
  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 32.729, lng: -117.195},
    center: {lat: 40.72, lng: -95.11},
    zoom: 4,
    mapTypeId: 'terrain',
    streetViewControl: false,
    mapTypeControl: false, //changing from sat to terrain
    zoomControl: false, //icons to zoom in or out
    scrollwheel: false, //zooming in/out with mousewheel
    panControl: false 
  });

service = new google.maps.places.PlacesService(map);
  for (var j = 0; j < citySearch.length; j++) {
    place = citySearch.getPlace();
    // do another search in order to add the latlng for the element
    request = {
      location: place.geometry.location,
      types: ['cities']
    };
    service.nearbySearch(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          // If the request succeeds, draw the place location on
          // the map as a marker, and register an event to handle a
          // click on the marker.
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });
        }
      }
    });
  }
}
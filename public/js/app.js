'use strict';

var map;
var depPort;
var flightDest;
var flightArray = [];
var flightDest = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027},
    {lat: -40.762021, lng: -62.578080},
    {lat: 39.626641, lng: 2.877364},
    {lat: 59.614856, lng: 6.217208},
    {lat: 39.355332, lng: 125.748454},
    {lat: 63.775087, lng: -18.392168}
  ];
var bounds;

function initAutocomplete() { //the search function for getting an airport
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.729, lng: -117.195},
    zoom: 3,
    mapTypeId: 'terrain',
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
    scrollwheel: false
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('box');
  var searchBox = new google.maps.places.SearchBox(input);
  //map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  // map.addListener('bounds_changed', function() {
  //   searchBox.setBounds(map.getBounds());
  // });

  var searchRet = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    //console.log(places[0].geometry.location); //first element of the search
    depPort = new google.maps.LatLng({lat: places[0].geometry.location.lat.call(), lng: places[0].geometry.location.lng.call()});
    //console.log(depPort);
    //console.log("set depart to " + depPort);
    if (places.length == 0) {
      return;
    }

    //Clear out the old markers.
    searchRet.forEach(function(searchRet) {
      searchRet.setMap(null);
    });
    searchRet = [];
    markerArray = [];
    flightArray = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    var place = places[0]; //only using the first return so far
    //places[0].forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      searchRet.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      // if (place.geometry.viewport) {
      //   // Only geocodes have viewport.
      //   bounds.union(place.geometry.viewport);
      // } else {
      //   bounds.extend(place.geometry.location);
      // }
      console.log("this ran after the search");
      drawMap();
      //console.log("right here");
      //console.log(places[0].geometry.location.lat.call());
    //});

      var bounds = new google.maps.LatLngBounds(); //finds center of all polylines
        for (var i = 0; i < flightDest.length; i++) {
          var tempCoord = new google.maps.LatLng(flightDest[i].lat,flightDest[i].lng+35); //offset the map to account for search bar
          bounds.extend(tempCoord);
        }
      //console.log(bounds);
      map.fitBounds(bounds); //centers map to the lines
  });

  var contentString = 'this is a bunch of rando information about the place I am clicking on until I can get Place to give it to me for da free';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  function drawMap() { //function to call line drawing after user input is taken
    if (depPort != null) {
      for (var i=0; i<flightDest.length; i++) {
        var flightPlanCoordinates = [
          {lat: depPort.lat.call(), lng: depPort.lng.call()},
          {lat: flightDest[i].lat, lng: flightDest[i].lng} ];
          //console.log(flightPlanCoordinates);
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true, //line or curves!!
          strokeColor: '#283018',
          strokeOpacity: 0.9,
          strokeWeight: 2
        });
        flightPath.setMap(map);
        flightArray.push(flightPath);
        //console.log(flightArray);
      }
      for (k in flightArray) { //changes opacity on all lines but the hovered one
        flightArray[k].addListener('mouseover', function(){
          for (var j=0; j<flightArray.length; j++) {
            flightArray[j].setOptions({strokeOpacity:0.2});
            this.setOptions({strokeOpacity:1.0});
          }
        });
        flightArray[k].addListener('mouseout', function(){
          for (var i=0; i<flightArray.length; i++) {
            flightArray[i].setOptions({strokeOpacity:1.0});
            this.setOptions({strokeOpacity:1.0});
          }
        });
      }
      var markerArray= []; //object of all the markers
      for (var i=0; i<flightDest.length; i++) {
        var display = "Marker at coords: " + flightDest[i].lat + ", " + flightDest[i].lng;
        var marker = new google.maps.Marker({
          position: flightDest[i],
          map: map,
          title: display,
          animation: google.maps.Animation.DROP
        });
        markerArray.push(marker);
        marker.setMap(map);
      }

      for (i in markerArray) { //makes the map zoom on the clicked marker
        bounds = map.getBounds();
        if (map.getZoom() != 8) {
          var marker = markerArray[i];
          google.maps.event.addListener(marker,'click',function(){
            map.setZoom(8);
            tempCoord = new google.maps.LatLng({lat: this.getPosition().lat.call()+0.6, lng: this.getPosition().lng.call()+0.5});
            map.setCenter(tempCoord);
            console.log(this.getPosition().lat.call());
            console.log(map.getZoom());
            infowindow.open(map, this);
          });
        } else {
          //map.fitBounds(bounds);
          //console.log("did it work");
        }
      }
      google.maps.event.addListener(infowindow, 'closeclick', function(){
        map.fitBounds(bounds);
        console.log('did it do?');
        var center = map.getCenter();
        console.log(center.lat.call());
        center = new google.maps.LatLng(center.lat.call(),center.lng.call()+35)
        map.setCenter(center);
      })
    }
  }
}

//events that happen apart from the map
var searchCon = document.getElementsByClassName("search container"); 
// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var critCont = document.getElementById('searchBox');
var resBar = document.getElementById('resultsbar');
var input = document.getElementById('box');

window.onload = function() { //displays the first pop up on the page loading
  $("#myModal2").style.display = "block";
  console.log("page load, showing modal 1");
};


hideModal = function(type) { //toggles the pop ups
  console.log("button click");
  if (type == 1) {
    $("#myModal").style.display = "none";
    $("#myModal2").style.display = "block";
  } else if (type == 2) {
    $("#myModal2").style.display = "none";
    $("#searchBox").style.display = "block";
    $("#resultsbar").style.display = "block";
    $("#box").style.display = "block";
    //drawMap();
    //need to pass the data from the form to populate the header, pull flight information from the api, generate the list, and call the function to populate additional info other the places
    //drawLine();
  }
}
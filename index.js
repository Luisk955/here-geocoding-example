'use strict';

window.addEventListener('load', initMap, false);


function initMap() {
  // Initialize the platform object:

  // Instantiate a map and platform object:
  var platform = new H.service.Platform({
    'apikey': 'zTD7YYrBYzfGoznx_4Now9IqKs9uoX6ZnFzTVkEI3k4',
    'app_id': 'hQ9QrcT5CM3F553MJvWU',
    'app_code': 'X9nmg5gBHwhvfTCqgaSNlQ'
  });

  var geocodingParams = {
    searchText: 'Henderson, NC'
  };

  // Get an instance of the geocoding service:
  var geocoder = platform.getGeocodingService();
  var latitude, longitude;
  var onResult = (result) => {
    latitude = result.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude;
    longitude = result.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude;

    console.log(`geoParams: ${geocodingParams.searchText}`);
    console.log(`lat: ${latitude}`);
    console.log(`lng: ${longitude}`);
    
  };
  // Call the geocode method with the geocoding parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  geocoder.geocode(geocodingParams, onResult);
}
![](http://imgur.com/AtSTDj1.png)

Ryan:
I added a route to getFlights.js where I am handling the HTTP requests 
and edit HTTP headers with the npm package ‘request'. I’m able to pull 
results from a GET request just fine, but when I try to POST I get an 
error that our API key is invalid and I’m not sure why. I need to contact 
their support and figure out why it has limited access.

Yacoub:
I added a field to the branch I'm working on for departing location but 
am still figuring out how to pass the user input to be processed. It 
seems like I have to set up a route to pass the input to a function on 
our server.

Sandra: I troubleshooted issues with setting up the API and submitted a
support ticket to Skyscanner about how to go about fixing the error with
the POST request.

Greg:
Implemented the geolocating feature to allow the map to update on the 
user's current location, added form persistence between the initial 
input form on the page load and the static search parameters on the page, 
updated the UI appearance through implementing Materialize in order the 
get a more functional aesthetic, and began work on a means of taking an 
airport code (through the flight API) and using Google places to get Place 
Details, Images, and the id for that airport.

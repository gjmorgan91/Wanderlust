*Ryan:*

Completely redid how the data is handled on the backend, reformatting for scraped data since the API requests weren't working out very well. Used scrapped data to feed in to the Google Maps API to read out the LongLat info, then read the associated meta data for the pin infowindows. Beyond the infowindows actually having real content, they also have links to Google Flights pages that should be an approximation of a flight ticket around the same price. This is accompished by concating a url together with the json metadata as parameters in the url.

*Yacoub:*

I worked on filtering flights based on user input for budget as well as dates willing to travel. This required me to change our form and to pass that data into a function which then parses the JSON looking for flights in that criteria.

*Sandra:*

tbd

*Greg:*

Was waiting on getting the flight information from the rest of the group still. Cleaned up the UI by turning the search bar into a smaller profile, static bar. Information on the infowindows utilizes the API to get details on the location and gave it a UI that has the aesthetic of the rest of the site. Began to set up overlays of traffic and transit to help give proof of concept of how users will gain additional information while learning about the destination.

Screenshot of static, search bar
![](http://i.imgur.com/luDJ4Ln.png)

Infowindow with UI elements, placeholders for the flight information is available
![](http://i.imgur.com/FCAnESz.png)

![](http://i.imgur.com/6eafWtr.png)

*No more screenshots, app is live:*

https://find-wanderlust-app.herokuapp.com/

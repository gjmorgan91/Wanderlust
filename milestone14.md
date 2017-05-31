*Ryan:*

Completely redid how the data is handled on the backend, reformatting for scraped data since the API requests weren't working out very well. Used scrapped data to feed in to the Google Maps API to read out the LongLat info, then read the associated meta data for the pin infowindows. Beyond the infowindows actually having real content, they also have links to Google Flights pages that should be an approximation of a flight ticket around the same price. This is accompished by concating a url together with the json metadata as parameters in the url.

*Yacoub:*

I worked on filtering flights based on user input for budget as well as dates willing to travel. This required me to change our form and to pass that data into a function which then parses the JSON looking for flights in that criteria.

*Sandra:*

tbd

*Greg:*

None

*No more screenshots, app is live:*

https://find-wanderlust-app.herokuapp.com/

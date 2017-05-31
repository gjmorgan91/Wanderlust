*Ryan:*

Completely redid how the data is handled on the backend, reformatting for scraped data since the API requests weren't working out very well. Used scrapped data to feed in to the Google Maps API to read out the LongLat info, then read the associated meta data for the pin infowindows. Beyond the infowindows actually having real content, they also have links to Google Flights pages that should be an approximation of a flight ticket around the same price. This is accompished by concating a url together with the json metadata as parameters in the url.

*Yacoub:*

tbd

*Sandra:*

tbd

*Greg:*

None

*No more screenshots, app is live:*

https://find-wanderlust-app.herokuapp.com/

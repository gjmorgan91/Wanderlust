*Ryan:*

I spoke with professor Guo and Alok about the problems that I have been having with the Skyscanner API. Alok had a lot of suggestions on how to get around my API limitations by switching to QPX Express API or by trying to scrape an existing flight site. Guo suggested that we work around a 'fake' csv or json and just have that display. Mixing their feedback, I've been reworking current implementations to build on a fake json, while also reimplementing the API to produce data that fits the style of the fake json. It's a bit broken right now so I haven't pushed a change, but it is making progress towards being able to implement realistic filtering of flight data.

*Yacoub:*

I added a data file to the project in light of sky scanner issues and learned how to parse the file and put pins on map based on any given JSON. Next step is to import a JSON file with airport data if we can't figure out QPX API.

*Sandra:*

I am working on adding implementating a data set so that we can convert the IATA codes (that represent airports) returned from an API request to longitude and latitude in order to display the location on the map. After finishing that, I will contribute to implementing the QPX API and displaying the information retrieved from that.

*Greg:*

Added functionality to be able to take in a city or airport and get a marker on the map which will allow us to access all of the Google Place documentation and images of that location.

*Screenshots:*

![](http://imgur.com/AtSTDj1.png)

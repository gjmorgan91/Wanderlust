*Overall* Overall the app has made progress towards having the UI able to interact with the map and have realistic data displayed, we will soon have the API for SkyScanner implemented which will allow us to find and display flights as well as the API for Google Places to find the closest airport and get information about destinations.

*Ryan:* I implemented UI components to overlay the map in order to interact with the data points relevant to flights. There are now templated buttons and dropdowns for price, starting location, and how soon the slight might be. Waiting on the API integration to be able to tie these selections to real implications on the map. Still need to dynamically change the option being displayed based on what was picked. Also need to user test and see how people respond to the given options. I also did minor refactoring to clean up the main directory.

*Yacoub:* Began implementing Google Places API which will be used to find closest airports from the user, as well as get information about the destinations.

*Sandra:* Wrote JavaScript code to implement the SkyScanner API, which will give us the flight information needed to display available flights for the user

*Greg:* Added the flights paths to the map as well as created the JavaScript that will display the flights taken from the API once implemented.

**Screenshot of app:**
![](http://i.imgur.com/zYJuDxG.png)

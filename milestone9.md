**Overall:**

A small start on refactoring, but a lot still needs to happen. We have two branches going, one with updated UI to show for demos, another that is a more built out Node app where we are re-implementing actual API calls to work properly

**Individual progress:**

*Ryan:* I built upon Yacoub's refactor into a full Node app with a backend, and starting working on linking the Skyscanner and Google Maps APIs. There's some trouble with how Skyscanner returns the JSON object: it doesn't have proper Long/Lat data in order to link to Google Maps. There should be a way to work around that, but I'm not sure yet how to tackle it. Also pushed to Heroku and working to transition future code into a full app instead of a single .html massive file.

*Yacoub:* I restructured the app to use the same stack we used in COGS 120. That's what we all are most familiar with and will just build on top of that.

*Sandra:* Helped with API research and creating/showing info box when markers on the map are clicked

*Greg:* added in the autofill function for searching for a departing airport which uses the google places api, added in the placeholder for the results window to be filled with flight info, made the map use the departing airport location to display the flights with our hardcoded destinations, made the markers for destinations intractable; clicking a location zooms to it and displays the infowindow for the locations, closing the infowindow returns the user to the flight overview. added in a window at the start which prompts the user for their flight parameters.

**Screenshot of app:**

Login

![](http://imgur.com/idFwvzB.png)

Set info

![](http://imgur.com/mIKOa5m.png)

New overlays on the map

![](http://imgur.com/sCDOuF9.png)

Pop-ups on the pins

![](http://imgur.com/WWZH4j1.png)

//script.js

// POST /codecademy/learn-http HTTP/1.1
// Host: www.codecademy.com
// Content-Type: text/html; charset=UTF-8

var apiKey = "sa302839589382574889837967187083";
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/{market}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={sa302839589382574889837967187083}", true);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        //change responseText and response.ip in next line
        var response = JSON.parse(xhr.responseText);
        //displays the data
        alert(response.ip);
        
    }
}

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
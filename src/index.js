import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from 'jquery';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const uuidv4 = require("uuid/v4");

$(document).ready(function () {

  var requestURL = 'https://restcountries.eu/rest/v2/all';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    var response = request.response;
    for (var x = 0; x < response.length; x++) {
      response[x].id = uuidv4();
    }

    for(x=0; x < response.length; x++) {
      response[x].population = response[x].population.toString();
        if(response[x].population.length > 3) {
          response[x].population = response[x].population.slice(0, response[x].population.length - 3) + "," + response[x].population.slice(response[x].population.length - 3, response[x].population.length);
        }
        if(response[x].population.length > 7) {
          response[x].population = response[x].population.slice(0, response[x].population.length - 7) + "," + response[x].population.slice(response[x].population.length - 7, response[x].population.length);
        }
        if(response[x].population.length > 11) {
          response[x].population = response[x].population.slice(0, response[x].population.length - 11) + "," + response[x].population.slice(response[x].population.length - 11, response[x].population.length);
        }
      }

window.marker = false;

    ReactDOM.render(
      <Router>
        <App all={response} />
      </Router>
      , document.getElementById("root"));
  }
});

/*var currState = false;
$('.converter').on("click", function () {
  if(!currState){
    currState = true;
    $("body").css("background-color", "hsl(207, 26%, 17%)");
    $("p").css("color","hsl(0, 0%, 100%)");
    $("h1").css("color","hsl(0, 0%, 100%)");
    $(".button").css("color","hsl(200, 15%, 8%)");
    $(".countryCard").css("background-color", "hsl(209, 23%, 22%)");
    $(".searchbar").css("background-color", "hsl(209, 23%, 22%)");
    $("nav").css("background-color", "hsl(209, 23%, 22%)");
  }
  else if (currState) {
    currState = false;
    $("body").css("background-color", "hsl(0, 0%, 98%)");
    $("p").css("color","hsl(200, 15%, 8%)");
    $("h1").css("color","hsl(200, 15%, 8%)");
    $("button").css("color","hsl(200, 15%, 8%)");
    $(".countryCard").css("background-color", "hsl(0, 0%, 100%)");
    $(".searchbar").css("background-color", "hsl(0, 0%, 100%)");
    $("nav").css("background-color", "hsl(0, 0%, 100%)");
  }
});*/

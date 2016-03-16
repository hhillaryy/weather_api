(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// Temp = function(temperature){
//   this.temperature = cityTemp
// }

exports.convertF = function(cityTemp) {
  return ((cityTemp * 1.8) - 459.67);
}

exports.convertC = function(cityTemp) {
  return (cityTemp - 273.15);
}

},{}],2:[function(require,module,exports){
$(document).ready(function(){
  $('#time').text(moment());
});



var apiKey = "257cc14e475f48d35f55dfd0ec0c4ee0";
var converttoF = require('./../js/temp.js').convertF;
var converttoC = require('./../js/temp.js').convertC;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
      });
    });

    $('#temperature').click(function() {
      var city = $('#location').val();
      $('#location').val("");
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    $('.showWeather').text("The temperature in " + city + " is " + response.main.temp + "K");
    $('#converttoF').show();
    $('#converttoC').show();
  }).fail(function(error) {
    $('showWeather').text(error.responseJSON.message);
   });
  });

});
  // $('#celsiusTemp').text(Math.floor(tempConvertToC(response.main.temp)));
  //     $('#celsius').hide();
  //     $('#convertToF').hide();

},{"./../js/temp.js":1}]},{},[2]);

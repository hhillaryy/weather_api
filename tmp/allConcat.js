$(document).ready(function(){
  $('#time').text(moment());
});



var apiKey = "257cc14e475f48d35f55dfd0ec0c4ee0";

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
    $('.showWeather').text("The temperature in " + city + " is " + response.main.temp);
  }).fail(function(error) {
    $('showWeather').text(error.responseJSON.message);
  });
  });
});

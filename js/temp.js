
// Temp = function(temperature){
//   this.temperature = cityTemp
// }

exports.convertF = function(cityTemp) {
  return ((cityTemp * 1.8) - 459.67);
};

exports.convertC = function(cityTemp) {
  return (cityTemp - 273.15);
};

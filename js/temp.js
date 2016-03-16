
// Temp = function(temperature){
//   this.temperature = cityTemp
// }

exports.convertF = function(temp) {
  return ((temp * 1.8) - 459.67);
};

exports.convertC = function(temp) {
  return (temp - 273.15);
};

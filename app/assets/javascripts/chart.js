
var receiveData = function () {
  // Make an array of labels
  var labels = [ "Lifespan", "Cost Per light", "Power Per Light", "Yearly Consumption", "Yearly Emissions", "Cost"]

  // Make arrays of all the data
  var lightsData = [ halogenObj.life, halogenObj.cost, halogenObj.wattage, halogenObj.yearlyconsumption, halogenObj.yearlyemissions, halogenObj.yearlypowercost ]

  // then creates a new chart
  var lightsData = document.getElementById('lights').getContext('2d');
  new Chart(lights).Bar(lightsData);
}

  $(document).ready(function () {

});







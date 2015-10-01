var receiveData = function () {
  // Make an array of labels
  var labels = [ "Lifespan", "Cost Per light", "Power Per Light", "Yearly Consumption", "Yearly Emissions", "Cost"]

  var halogenLifeSpan = halogenObj.life;
  var halogenCostPerLight = halogenObj.cost;
  var halogenPowerPerLight = halogenObj.wattage;
  var halogenYearlyConsumption = halogenObj.yearlyconsumption;
  var halogenYearlyEmissions = halogenObj.yearlyemissions;
  var halogenCost = halogenObj.yearlypowercost;

  var ledLifeSpan = ledObj.life;
  var ledCostPerLight = ledObj.cost;
  var ledPowerPerLight = ledObj.wattage;
  var ledYearlyConsumption = ledObj.yearlyconsumption;
  var ledYearlyEmissions = ledObj.yearlyemissions;
  var ledCost = ledObj.yearlypowercost;


  var data = {
    labels: labels,
    datasets: [
      {
        label: "Halogen",
        fillColor: "#999",
        strokeColor: "#999",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [ halogenLifeSpan, halogenCostPerLight, halogenPowerPerLight, halogenYearlyConsumption, halogenYearlyEmissions, halogenCost ]
      },
      {
        label: "LED",
        fillColor: "#0ec2a7",
        strokeColor: "#0ec2a7",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [ ledLifeSpan, ledCostPerLight, ledPowerPerLight, ledYearlyConsumption, ledYearlyEmissions, ledCost ]
      }
    ]
  }

  // Make arrays of all the data
  // var lightsData = [ halogenObj.life, halogenObj.cost, halogenObj.wattage, halogenObj.yearlyconsumption, halogenObj.yearlyemissions, halogenObj.yearlypowercost ]
  // then creates a new chart
  var lights = document.getElementById('lights').getContext('2d');
  new Chart(lights).Bar(data);
}

  $(document).ready(function () {

});







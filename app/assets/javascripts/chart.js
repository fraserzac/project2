var receiveData = function () {
  // Make an array of labels
  var labels = [ "Cost Per light $", "Power Per Light (watts", "Yearly Consumption KWH", "Yearly Emissions C02", "Cost $"]

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
        data: [ halogenCostPerLight, halogenPowerPerLight, halogenYearlyConsumption, halogenYearlyEmissions, halogenCost ]
      },
      {
        label: "LED",
        fillColor: "#0ec2a7",
        strokeColor: "#0ec2a7",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [ ledCostPerLight, ledPowerPerLight, ledYearlyConsumption, ledYearlyEmissions, ledCost ]
      }
    ],
    scaleShowGridLines : false,
    scaleShowVerticalLines: false,
    scaleGridLineColor : 'white'
  }

  // Make arrays of all the data
  // var lightsData = [ halogenObj.life, halogenObj.cost, halogenObj.wattage, halogenObj.yearlyconsumption, halogenObj.yearlyemissions, halogenObj.yearlypowercost ]
  // then creates a new chart


  var lights = document.getElementById('lights').getContext('2d');
  var barChart = new Chart(lights).Bar(data, {
    scaleShowGridLines : false,
    scaleShowVerticalLines: false,
    scaleGridLineColor : 'white',
    scaleLineColor: 'white'


    });
}

  $(document).ready(function () {

});







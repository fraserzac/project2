var lights = [
{
  name: '240V 25W Candle Halogen',
  wattage: 25,
  life: 2000,
  cost: 5.00
},
{
  name: '240V 40W Classic A Halogen',
  wattage: 40,
  life: 2000,
  cost: 5.00
},
{
  name: '240V 25W Classic A Halogen',
  wattage: 25,
  life: 2000,
  cost: 5.00
},
{
  name: '12V 20W MR16 GU5.3 Halogen',
  wattage: 20,
  life: 4000,
  cost: 5.00
},
{
  name: '240V 40W R63 Halogen',
  wattage: 40,
  life: 2000,
  cost: 5.00
},
{
  name: '240V 40W PAR16 Halogen',
  wattage: 40,
  life: 2000,
  cost: 16.00
},
{
  name: '240V 25W PAR16 Halogen',
  wattage: 25,
  life: 2000,
  cost: 16.00
},
{
  name: '240V 75W PAR30 Halogen',
  wattage: 75,
  life: 2000,
  cost: 20.00
},
{
  name: '240V 100W PAR38 Halogen',
  wattage: 100,
  life: 2000,
  cost: 15.00
},
{
  name: '12V 100W AR111 Halogen',
  wattage: 100,
  life: 2000,
  cost: 20.00
},
{
  name: '240V 50W Classic A Halogen',
  wattage: 50,
  life: 2000,
  cost: 5.00
},
{
  name: '12V 50W MR16 GU5.3 Halogen',
  wattage: 50,
  life: 4000,
  cost: 5.00
}
];
var leds = [
{
  name: '240V 4W Candle LED',
  wattage: 4,
  life: 25000,
  cost: 19.95
},
{
  name: '240V 10W Classic A LED',
  wattage: 10,
  life: 35000,
  cost: 49.95
},
{
  name: '240V 6.5W Classic A LED',
  wattage: 6.5,
  life: 35000,
  cost: 49.95
},
{
  name: '12V 6.5W MR16 GU5.3 LED',
  wattage: 6.5,
  life: 35000,
  cost: 29.95
},
{
  name: '240V 8W R63 LED',
  wattage: 8,
  life: 35000,
  cost: 39.95
},
{
  name: '240V 8W PAR16 LED',
  wattage: 8,
  life: 35000,
  cost: 39.95
},
{
  name: '240V 4W PAR16 LED',
  wattage: 4,
  life: 35000,
  cost: 19.95
},
{
  name: '240V 13.5W PAR30 LED',
  wattage: 13.5,
  life: 25000,
  cost: 53.95
},
{
  name: '240V 18W PAR38 LED',
  wattage: 18,
  life: 25000,
  cost: 64.95
},
{
  name: '12V 18W AR111 LED',
  wattage: 18,
  life: 25000,
  cost: 69.95
},
{
  name: '240V 7.2W MR16 LED',
  wattage: 7.2,
  life: 25000,
  cost: 39.95
},
{
  name: '12V 7W MR16 GU5.3 LED',
  wattage: 7,
  life: 25000,
  cost: 39.95
}
];



  // for the jquery array objects
  var $leds = leds;
  var $lights = lights;
  // Declare Global values hours, number lights other wise it doesn't work
  var $Hours = +$('#Hours').val();
  var $Number_lights = +$('#Number_lights').val();
  // Declare Glabal fixed values
  var $CO2_AVG = 0.000979333;
  var $year = 365;
  var $KWH_Cost = 0.18;
  // declare array object values wattage cost and life
  var $halogenwattage = lights.wattage;
  var $ledswattage = leds.wattage;
  var $halogenlife = lights.life;
  var $ledlife = leds.life;
  var $halogencost = lights.cost;
  var $ledcost = leds.cost;
  var halogenObj;
  var ledObj;
$(document).ready(function () {
  
  var calculateEnergyUsage = function () {
    // So you now have access to the correct LED and halogen lights
      // halogenObj
      // ledObj
      // halogenObj.wattage
    // Get the hours erb input
    var $Hours = +$('#Hours').val();
    // Get the number of lights erb input
    var $Number_lights = +$('#Number_lights').val();
    // Calculate yearly POWER CONSUMPTION
    // Number of lights * hours per day * days in year * Power per light divided by 100
    var $total_power = $Hours * $Number_lights * $year * $KWH_Cost/100;
    // Calculate yearly COST
    // total power times cost per KWH
    var $total_cost = $total_power * $KWH_Cost;
    // Calculate yearly CO EMISSIONS
    // total power times au average emmissions
    var $total_emssions = $total_power * $CO2_AVG;
    // Trying to render in <div><p><span> RESULT HALOGEN </span>span> RESULT LED </span>span> DIFFERENCE </span></p></div>
    // renders the halogen results on home.html.erb
    $('.halogen_render', '.lifespan').html($total_power);
  }
  calculateEnergyUsage();
  $("input[type=number]").on("change", function () {
    calculateEnergyUsage();
  });
  /////////////////
  // Trying to render the matching halogen wattage 
  for (var e = 0; e < lights.length; e++) {
    if (lights[e].name == $('.halogen').val() ) {
      var $wattage = lights[e].wattage;
      var $p = $('<p><span class="wattage">' + light.wattage + '<span></p>');
      $p.data('index', e);
      $p.appendTo('.halogen_render', '.wattage');
    }
  }
  console.log($wattage);
  $('.wattage').on('change', function () {
    var index = $(this).find(':selected').data('index');
    var info = lights[index];
    console.log(info);
  });
  ///////////////
  // Sets the Halogen options list from the array
  for (var i = 0; i < lights.length; i++) {
    var light = lights[i];
    var $option = $('<option>' + light.name + '</option>');
    $option.data('index', i);
    $option.appendTo('.halogen');
  }
  // Listens for changes on class Halogen, stores index
  $('.halogen').on('change', function () {
    var index = $(this).find(':selected').data('index');
    var info = lights[index];
    halogenObj = info;
    console.log(info);
  });
  // Sets the Leds options list from the array
  for (var j = 0; j < leds.length; j++ ) {
    var led = leds[j];
    var $option = $('<option>' + led.name + '</option>');
    $option.data('index', j);
    $option.appendTo('.led');
  }
  // Listens for changes on class Led, stores index
  $('.led').on('change', function () {
    var index = $(this).find(':selected').data('index');
    var info = leds[index];
    ledObj = info;
    console.log(info);
  })
});














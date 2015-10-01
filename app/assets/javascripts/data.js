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
             
  var halogenObj;
  var ledObj;
  var difference;


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
    // Number of lights * hours per day * days in year * Power per light divided by 1000
    // var $total_power = $Hours * $Number_lights * $year * $KWH_Cost/1000            ;

    // Calculate yearly COST
    // total power times cost per KWH
    // var $total_cost = $total_power * $KWH_Cost;

    // Calculate yearly CO EMISSIONS
    // total power times au average emmissions
    // var $total_emssions = $total_power * $CO2_AVG;

    // Trying to render in <div><p><span> RESULT HALOGEN </span>span> RESULT LED </span>span> DIFFERENCE </span></p></div>
    // renders the halogen results on home.html.erb
    // $('.halogen_render', '.lifespan').html($total_power);

    if (halogenObj) {
      updateHalogenStats();
    }
    
    if (ledObj) {
      updateLEDStats();
    }

    if (halogenObj && ledObj) {
      updateDifferenceStats();
    }
  }

  // Calling the calculate function
  calculateEnergyUsage();

  // When there's a change in the numbers please calculate
  $("input[type=number]").on("change", function () {
    calculateEnergyUsage();
  });

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

    // Saves the halogen object, 
    halogenObj = info;

    updateHalogenStats();
    updateDifferenceStats();
    //console.log(info);
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

    // Saves the ledObj
    ledObj = info;

    updateLEDStats();
    updateDifferenceStats();
    //console.log(info);
  })
}); 


var updateHalogenStats = function() {
    halogenObj.yearlyconsumption = Math.round( halogenObj.wattage * (365 * (+$('#Hours').val()) * +$('#Number_lights').val() ) / 1000 * 100 ) / 100;
    halogenObj.yearlyemissions = Math.round( ( $CO2_AVG * halogenObj.yearlyconsumption * 1000 ) * 100 ) / 100;
    halogenObj.yearlyconsumption = Math.round( halogenObj.wattage * (365 * (+$('#Hours').val()) * +$('#Number_lights').val() ) / 1000 * 100 ) / 100; 
    halogenObj.yearlyemissions = Math.round( ( $CO2_AVG * halogenObj.yearlyconsumption * 1000 ));  ///////////////
    halogenObj.yearlypowercost = Math.round( halogenObj.yearlyconsumption * $KWH_Cost * 100 ) / 100;
    

    var halogenLifeSpan = $('.halogen_render', '.lifespan').html(halogenObj.life);
    var halogenCostPerLight = $('.halogen_render', '.costperlight').html(halogenObj.cost);
    var halogenPowerPerLight = $('.halogen_render', '.powerperlight').html(halogenObj.wattage);
    var halogenYearlyConsumption = $('.halogen_render', '.yearlyconsumption').html(halogenObj.yearlyconsumption); 
    var halogenYearlyEmissions = $('.halogen_render', '.yearlyemissions').html(halogenObj.yearlyemissions); ////////////////
    var halogenCost = $('.halogen_render', '.yearlypowercost').html(halogenObj.yearlypowercost); ////////////////

    if ( halogenObj && ledObj ) {
      receiveData();
    }

    console.log($('.halogen_render', '.yearlyconsumption').html(halogenObj.yearlyconsumption));
}

var updateLEDStats = function() {
  console.log( "UPDATE LED STATS CALLED" )
    ledObj.yearlyconsumption = Math.round( ledObj.wattage * (365 * (+$('#Hours').val()) * +$('#Number_lights').val() ) / 1000 * 100 ) / 100;
    ledObj.yearlyemissions = Math.round( ( $CO2_AVG * ledObj.yearlyconsumption * 1000 ) * 100 ) / 100;
    ledObj.yearlypowercost = Math.round( ledObj.yearlyconsumption * $KWH_Cost * 100 ) / 100;

    $('.leds_render', '.lifespan').html(ledObj.life);
    $('.leds_render', '.costperlight').html(ledObj.cost);
    $('.leds_render', '.powerperlight').html(ledObj.wattage);
    $('.leds_render', '.yearlyconsumption').html(ledObj.yearlyconsumption);
    $('.leds_render', '.yearlyemissions').html(ledObj.yearlyemissions);
    $('.leds_render', '.yearlypowercost').html(ledObj.yearlypowercost);
    ledObj.yearlyconsumption = Math.round( ledObj.wattage * (365 * (+$('#Hours').val()) * +$('#Number_lights').val() ) / 1000 * 100 ) / 100; 
    ledObj.yearlyemissions = Math.round( ( $CO2_AVG * ledObj.yearlyconsumption * 1000 )); ////////////////
    ledObj.yearlypowercost = Math.round( ledObj.yearlyconsumption * $KWH_Cost * 100 ) / 100; ////////////////

    var ledLifeSpan = $('.leds_render', '.lifespan').html(ledObj.life);
    var ledCostPerLight = $('.leds_render', '.costperlight').html(ledObj.cost);
    var ledPowerPerLight = $('.leds_render', '.powerperlight').html(ledObj.wattage);
    var ledYearlyConsumption = $('.leds_render', '.yearlyconsumption').html(ledObj.yearlyconsumption); 
    var ledYearlyEmissions = $('.leds_render', '.yearlyemissions').html(ledObj.yearlyemissions); ////////////////
    var ledCost = $('.leds_render', '.yearlypowercost').html(ledObj.yearlypowercost); ////////////////

    if ( halogenObj && ledObj ) {
      receiveData();
    }
    console.log( ledLifeSpan, ledCostPerLight, ledPowerPerLight );
};

var updateDifferenceStats = function() { 
  //difference.life;
  //difference.yearlyconsumption = ( halogenObj.wattage * (365 * (+$('#Hours').val())) ) - ( ledObj.wattage * ( 365 * (+$('#Hours').val())) );
  //difference.yearlypowercost = ( halogenObj.yearlyconsumption * $KWH_Cost ) - ( ledObj.yearlyconsumption * $KWH_Cost ); 

  if ( halogenObj && ledObj ) {
    $('.difference', '.lifespan').html( ledObj.life - halogenObj.life );
    $('.difference', '.costperlight').html(halogenObj.cost - ledObj.cost);
    $('.difference', '.powerperlight').html(halogenObj.wattage - ledObj.wattage);
    $('.difference', '.yearlyconsumption').html( Math.round( halogenObj.yearlyconsumption - ledObj.yearlyconsumption ) * 100 )/ 100;
    $('.difference', '.yearlyemissions').html( Math.round( halogenObj.yearlyemissions - ledObj.yearlyemissions * 100 ) / 100 );
    $('.difference', '.yearlypowercost').html( Math.round( halogenObj.yearlypowercost - ledObj.yearlypowercost * 100 ) / 100 );

    var differenceLifeSpan = $('.difference', '.lifespan').html( ledObj.life - halogenObj.life );
    var differencePerLight = $('.difference', '.costperlight').html(halogenObj.cost - ledObj.cost);
    var differencePowerPerLight = $('.difference', '.powerperlight').html(halogenObj.wattage - ledObj.wattage);
    var differenceYearlyConsumption = $('.difference', '.yearlyconsumption').html( halogenObj.yearlyconsumption - ledObj.yearlyconsumption ); 
    var differenceYearlyEmissions = $('.difference', '.yearlyemissions').html( Math.round(halogenObj.yearlyemissions - ledObj.yearlyemissions) ); 
    var differenceCost = $('.difference', '.yearlypowercost').html( Math.round( (halogenObj.yearlypowercost - ledObj.yearlypowercost) * 100 )/100 ); 
    // Math.round(differenceLifeSpan * 100) / 100;
    // Math.round(differencePerLight * 100) / 100;
    // Math.round(differencePowerPerLight * 100) / 100;
    // Math.round(differenceYearlyConsumption * 100) / 100;
    // Math.round(differenceYearlyEmissions * 100) / 100;
    // Math.round(differenceCost * 100) / 100;
  }

};


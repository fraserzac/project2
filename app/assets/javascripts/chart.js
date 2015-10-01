var lightData = {
labels : ["January","February","March","April","May","June"],
datasets :
[
  {
    fillColor : "rgba(152,154,152,0.4)",
    strokeColor : "#ACC26D",
    pointColor : "#fff",
    pointStrokeColor : "#9DB86D",
    data : [103,206,990,281,20,24]
  },
  {
    fillColor : "rgba(252,254,102,0.4)",
    strokeColor : "#ACC26D",
    pointColor : "#fff",
    pointStrokeColor : "#9DB86D",
    data : [103,206,990,281,20,24]
  },
  {
    fillColor : "rgba(72,194,132,0.4)",
    strokeColor : "#ACC26D",
    pointColor : "#fff",
    pointStrokeColor : "#9DB86D",
    data : [153,10,99,20,200,297]
  }
]
}

$(document).ready(function () {
  var lights = document.getElementById('lights').getContext('2d');
  new Chart(lights).Bar(lightData);
});






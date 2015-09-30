      var lightData = {
        labels : ["January","February","March","April","May","June"],
        datasets :
         [
            {
              fillColor : "rgba(152,154,152,0.4)",
              strokeColor : "#ACC26D",
              pointColor : "#fff",
              pointStrokeColor : "#9DB86D",
              data : [203000,18600,99000,2100,3000,24700]
            },
            {
              fillColor : "rgba(252,254,102,0.4)",
              strokeColor : "#ACC26D",
              pointColor : "#fff",
              pointStrokeColor : "#9DB86D",
              data : [103000,20600,99000,28100,20500,24700]
            },
            {
              fillColor : "rgba(72,194,132,0.4)",
              strokeColor : "#ACC26D",
              pointColor : "#fff",
              pointStrokeColor : "#9DB86D",
              data : [153000,10600,99000,20100,20500,29700]
            }
         ]
        }

$(document).ready(function () {
  var lights = document.getElementById('lights').getContext('2d');
  new Chart(lights).Bar(lightData);
});


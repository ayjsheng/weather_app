$(document).ready(function() {
  var select = $('select');
  var vancouverID = select.val();
  var vancouverURL = getAPIURLFromCity(vancouverID);
  printWeatherDataToConsole(vancouverURL);
  $('select').on('change', function(){
    var cityID = this.value;
    var cityURL = getAPIURLFromCity(cityID);
    printWeatherDataToConsole(cityURL);
  })
});

function getAPIURLFromCity(id){
  return "http://api.openweathermap.org/data/2.5/weather?id=" + id + "&appid=0af265bd457102925b0f095d64264902"
};

function getAPIURLForLonLat(position){
  var lon = position.coords.longitude;
  var lat = position.coords.latitude; 
  $("#data").html("latitude: " + lat + "<br>longitude: " + lon);
  return "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=0af265bd457102925b0f095d64264902"
}

function printWeatherDataToConsole(api){
  $.getJSON(api, function(data) {
    var weatherType = data.weather[0].description;
    var kelvin = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    var fahrenheit = ((kelvin)*(9/5)-459.67).toFixed(0);
    var celsius = ((kelvin)-273).toFixed(0);
    var toggleFandC = true;
    var weatherID = data.weather[0].id;
    changeBackgroundImg(weatherID);
    console.log(city);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#celsius").html(celsius + " &deg;C");
    $("#windSpeed").html(windSpeed + " m/s");

    $("#celsius").click(function(){
      if(toggleFandC == true){
        $("#celsius").html(fahrenheit + " &deg;F");
        toggleFandC = false;
      } else {
        $("#celsius").html(celsius + " &deg;C");
        toggleFandC = true;
      }
    });

function changeBackgroundImg(weatherID){
  if(weatherID <= 299){ //Thunderstorm//
    $('body').css('background', 'url(img/storm.jpg)');
    return;
  }
  if(weatherID <= 599){ //Rain & Drizzle//
    $('body').css('background', 'url(img/drizzle.jpg)');
    return
  }
  if(weatherID <= 699){ //snow//
    $('body').css('background', 'url(img/snow.jpg)');
    $('#snowfall').css;
    return
  }
  if(weatherID <= 799){ //atmosphere//
    $('body').css('background', 'url(img/atmosphere.jpg');
    return
  }
  if(weatherID == 800){ //clear//
    $('body').css('background', 'url(img/clearsky.jpg)');
    return
  }
  if(weatherID <= 899){ //clouds//
    $('body').css('background', 'url(img/clouds.jpg)');
    return
  }
  if(weatherID <= 906){ //storm//
    $('body').css('background', 'url(img/storm.jpg)');
    return
  }
  if(weatherID <= 955){ //breeze//
    $('body').css('background', 'url(img/breeze.jpg)');
    return
  }
  if(weatherID <= 962){ //violent winds//
    $('body').css('background', 'url(img/highwinds.jpg)');
    return
  }
} 
    console.log(api);
  });
}
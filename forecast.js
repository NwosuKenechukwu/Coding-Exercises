//Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const printForecast = function (arr) {
  let forecast;

  for (let i = 0; i < arr.length; i++) {
    i === 0
      ? (forecast = `... ${arr[i]}ºC in ${i + 1} day ...`)
      : (forecast = forecast + ` ${arr[i]}ºC in ${i + 1} days ...`);
  }
  console.log(forecast);
};

printForecast([12, 5, -5, 0, 4]);

var fetch = require('node-fetch');

console.log("hellow");
const fetchNow = async(city) => {
    console.log(city);
    var key = "c39e321bbb3f4a0b7117de6cabd45906";
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`);
    const data = await response.json();
    const now  ={
        "main":data.weather[0].main,
        "desc":data.weather[0].description,
        "temp":data.main.temp.toFixed()-273,
        "name":data.name,
    }
    console.log(now);
    return now;
};

module.exports = fetchNow;
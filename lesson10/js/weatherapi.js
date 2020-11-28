// Preston Townpage Code
const prestonForcast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=91a14b3e44979104098259be0b0f8f5c&units=imperial";
const prestonCurrent = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=91a14b3e44979104098259be0b0f8f5c&units=imperial";

//Current Weather
fetch(prestonCurrent)
    .then((response) => response.json())
    .then((jsObject) => {        
        //console.log(jsObject);
        let currentConditions = jsObject.weather[0].main;
        let temp = jsObject.main.temp.toFixed(1);
        let windSpeed = jsObject.wind.speed.toFixed(0);
        let humidity = jsObject.main.humidity;
        let windChill = calculateWindChill(temp, windSpeed);

        let summaryUL = document.createElement("ul");
        let summarydetails = [`${currentConditions}`, `<span id="high-temp">${temp}</span>&deg;F`, `${windChill}`, `${humidity}%`, `<span id="wind-speed">${windSpeed}</span> mph`];
        summarydetails.forEach(detail => {
            let li = document.createElement("li");
            li.innerHTML = detail;
            summaryUL.appendChild(li);
        });
        
        document.querySelector("section.stats-right").appendChild(summaryUL);  
    });

// Five-day Forecast
fetch(prestonForcast)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let forcast = jsObject.list.filter(i => i.dt_txt.includes("18:00:00"));
        //console.log(forcast);
        let weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
        let forcastUL = document.createElement("ul");

        forcast.forEach(i => {
            let li = document.createElement("li");
            let day = new Date(i.dt_txt);
            let iconURL = `https://openweathermap.org/img/w/${i.weather[0].icon}.png`;
            let iconAlt = i.weather[0].description;
            let forcastContent = `<strong>${weekdays[day.getDay()]}</strong> <img src="${iconURL}" alt="${iconAlt}"> ${i.main.temp.toFixed(0)}&deg;F`;            
            li.innerHTML = forcastContent;            
            forcastUL.appendChild(li);
            });
        
        document.querySelector("section.forcast").appendChild(forcastUL);
    });

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        windChill = 35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16);
        windChill = `${Math.round(windChill.toFixed(2))}&deg;F`;
        return windChill;
    }
    else {
        windChill = "N/A";
        return windChill;
    }
};
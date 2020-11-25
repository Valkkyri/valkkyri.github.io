const fishHavenAPIurl = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&appid=91a14b3e44979104098259be0b0f8f5c&units=imperial";
const prestonAPIurl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=91a14b3e44979104098259be0b0f8f5c&units=imperial";
const sodaSpringsAPIurl = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=91a14b3e44979104098259be0b0f8f5c&units=imperial";

const apiURLs = [fishHavenAPIurl, prestonAPIurl, sodaSpringsAPIurl];
const townClasses = ["fishhaven", "preston", "sodasprings"];

for (let i = 0; i < 3; i++) {
    fetch(apiURLs[i])
        .then((response) => response.json())
        .then((jsObject) => {
            /* ------ current weather start ------ */
            //console.log(jsObject);
            let currentConditions = jsObject.list[0].weather[0].main;
            let temp = jsObject.list[0].main.temp.toFixed(1);
            let windSpeed = jsObject.list[0].wind.speed.toFixed(0);
            let humidity = jsObject.list[0].main.humidity;
            let windChill = calculateWindChill(temp, windSpeed);
            
            let summaryUL = document.createElement("ul");
            let summarydetails = [`${currentConditions}`, `<span id="high-temp">${temp}</span>&deg;F`, `${windChill}`, `${humidity}%`, `<span id="wind-speed">${windSpeed}</span> mph`];
            summarydetails.forEach(detail => {
                let li = document.createElement("li");
                li.innerHTML = detail;
                summaryUL.appendChild(li);
            });
            
            document.querySelector(`.${townClasses[i]}.stats-right`).appendChild(summaryUL);
            /* ------ current weather end ------ */
    });
};

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
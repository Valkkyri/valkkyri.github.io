// Preston Townpage Code
const prestonAPIurl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=91a14b3e44979104098259be0b0f8f5c&units=imperial";

fetch(prestonAPIurl)
    .then((response) => response.json())
    .then((jsObject) => {
        /* ------ current weather start ------ */
        //console.log(jsObject);
        let currentConditions = jsObject.list[0].weather[0].main;
        let temp = jsObject.list[0].main.temp.toFixed(1);
        let windSpeed = jsObject.list[0].wind.speed.toFixed(0);
        let humidity = jsObject.list[0].main.humidity;
        let windChill = "N/A";
        
        // Calculate Wind Chill
        if (temp <= 50 && windSpeed > 3) {
            windChill = 35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16);
            windChill = `${Math.round(windChill.toFixed(2))} &deg;F`;
        }
        else {
            windChill = "N/A";
        }

        let summaryUL = document.createElement("ul");
        let summarydetails = [`${currentConditions}`, `<span id="high-temp">${temp}</span>&deg;F`, `${windChill}`, `${humidity}%`, `<span id="wind-speed">${windSpeed}</span> mph`];
        summarydetails.forEach(detail => {
            let li = document.createElement("li");
            li.innerHTML = detail;
            summaryUL.appendChild(li);
        });
        
        document.querySelector("section.stats-right").appendChild(summaryUL);
        /* ------ current weather end ------ */

        
        /* ------ five day forecast start ------ */
        let forcast = jsObject.list.filter(i => i.dt_txt.includes("18:00:00"));
        console.log(forcast);
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
        /* ------ five day forecast end ------ */    
    });  
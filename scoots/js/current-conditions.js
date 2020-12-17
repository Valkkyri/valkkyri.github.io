const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.501&lon=-86.94598&appid=91a14b3e44979104098259be0b0f8f5c&exclude=minutely,hourly&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        // console.log(currentWeather);
        let conditionsDescription = currentWeather.current.weather[0].description;
        let temperature = currentWeather.current.temp.toFixed(0);
        let humidity = currentWeather.current.humidity;
        let uvIndex = currentWeather.current.uvi;
        let windSpeed = currentWeather.current.wind_speed.toFixed(0);

        let conditionName = ["Currently:", "Temperature:", "Humidity:", "Wind Speed:", "UV Index:"];
        let conditionDetails = [conditionsDescription, `${temperature}&deg;F`, `${humidity}%`, `${windSpeed} mph`, uvIndex];
        let dl = document.createElement("dl");

        let title = document.createElement("h3");
        title.innerText = "Current Conditions in Cozumel";
        
        for (let i = 0; i < conditionName.length; i++) {
            let dt = document.createElement("dt");
            dt.innerText = conditionName[i];
            let dd = document.createElement("dd");
            dd.innerHTML = conditionDetails[i];

            dl.appendChild(dt);
            dl.appendChild(dd);
        };

        document.querySelector(".current-conditions").appendChild(dl);       
        
        
        // 3-DAY FORCAST
        let weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

        let forcastUL = document.createElement("ul");

        for (let j = 0; j < 3; j++) {
            let dailyForcast = currentWeather.daily[j];
            
                // console.log(dailyForcast);
                let li = document.createElement("li");
                let highTemp = dailyForcast.temp.max.toFixed(0);

                let forcastDay = new Date(dailyForcast.dt * 1000).getDay();
                let dayName = weekdays[forcastDay];            
                
                // console.log(dayName);
                let icon = dailyForcast.weather[0].icon;
                let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                let iconDescription = dailyForcast.weather[0].description;
                let forcastContent = `<strong>${dayName}</strong> <img src="${iconURL}" alt="${iconDescription}"> ${highTemp}&deg;F`;            
                li.innerHTML = forcastContent;            
                forcastUL.appendChild(li);
            };        

        document.querySelector(".forcast").appendChild(forcastUL);
    });
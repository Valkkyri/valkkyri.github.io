const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.501&lon=-86.94598&appid=91a14b3e44979104098259be0b0f8f5c&exclude=minutely,hourly&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        //console.log(currentWeather);
        let conditions = currentWeather.current.weather[0].main;
        // let icon = currentWeather.current.weather[0].icon;
        // let iconDescription = currentWeather.current.weather[0].description;
        let temperature = currentWeather.current.temp.toFixed(0);
        let humidity = currentWeather.current.humidity;
        let uvIndex = currentWeather.current.uvi;
        let windSpeed = currentWeather.current.wind_speed.toFixed(0);

        let conditionName = ["Currently:", "Temperature:", "Humidity:", "Wind Speed:", "UV Index:"];
        let conditionDetails = [conditions, `${temperature}&deg;F`, `${humidity}%`, `${windSpeed} mph`, uvIndex];
        let dl = document.createElement("dl");

        // let iconImage = document.createElement("img");
        // iconImage.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
        // iconImage.setAttribute("alt", iconDescription);

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

        // document.querySelector(".current-conditions").appendChild(iconImage);
        document.querySelector(".current-conditions").appendChild(dl);
    });
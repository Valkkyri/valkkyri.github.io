// const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.501&lon=-86.94598&appid=91a14b3e44979104098259be0b0f8f5c&exclude=minutely,hourly&units=imperial";
const apiURL = "https://valkkyri.github.io/scoots/data/current-conditions.json";

let i = 0;
fetch(apiURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        console.log(currentWeather);
        // let conditions = currentWeather.current.weather[0].main;
        let conditionsDescription = currentWeather.current.weather[0].description;
        // let icon = currentWeather.current.weather[0].icon;
        // let iconDescription = currentWeather.current.weather[0].description;
        let temperature = currentWeather.current.temp.toFixed(0);
        let humidity = currentWeather.current.humidity;
        let uvIndex = currentWeather.current.uvi;
        let windSpeed = currentWeather.current.wind_speed.toFixed(0);

        let conditionName = ["Currently:", "Temperature:", "Humidity:", "Wind Speed:", "UV Index:"];
        let conditionDetails = [conditionsDescription, `${temperature}&deg;F`, `${humidity}%`, `${windSpeed} mph`, uvIndex];
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

        // 3-DAY FORCAST
        let weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

        let forcastUL = document.createElement("ul");
        // let dailyForcast = currentWeather.daily;

        
        let today = new Date();
        let weekdayNum = today.getDay();
        // while (weekdayNum == currentWeather.daily[j]) {
        //     j++

        // };
        




        for (let j = 0; j < currentWeather.daily.length; j++) {
            let highTemp = currentWeather.daily[j].temp.max.toFixed(0);
            
            
            // dailyForcast[j];
            console.log(highTemp);
        }
        
        
        
        // dailyForcast.forEach(day => {
        //     // console.log(day);
        //     let li = document.createElement("li");
        //     // let highTemp = day.temp.max.toFixed(0);
            
        //     let today = new Date();
        //     let dayName = weekdays[today.getDay()];
        //     let currentDate = dayName + ', ' + today.getDate();
            
        //     let weekdayNum = today.getDay();
        //     console.log(weekdayNum);
        //     let icon = day.weather[0].icon;
        //     let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        //     let iconDescription = day.weather[0].description;
        //     let forcastContent = `<strong>${currentDate}</strong> <img src="${iconURL}" alt="${iconDescription}"> ${highTemp}&deg;F`;            
        //     li.innerHTML = forcastContent;            
        //     forcastUL.appendChild(li);
        //     i++;
        // }, i);

        document.querySelector(".forcast").appendChild(forcastUL);
        i++;
    }, i);
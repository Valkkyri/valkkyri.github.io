// let forcastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.501&lon=-86.94598&appid=91a14b3e44979104098259be0b0f8f5c&units=imperial";

// 3-Day Forecast
fetch(forcastURL)
    .then((response) => response.json())
    .then((weather) => {        
        let forcast = weather.list.filter(i => i.dt_txt.includes("18:00:00"));
        console.log(forcast);
        let weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
        let forcastUL = document.createElement("ul");

        forcast.forEach(i => {
            let li = document.createElement("li");
            let day = new Date(i.dt_txt);
            let iconURL = `https://openweathermap.org/img/wn/${i.weather[0].icon}.png`;
            let iconAlt = i.weather[0].description;
            let forcastContent = `<strong>${weekdays[day.getDay()]}</strong> <img src="${iconURL}" alt="${iconAlt}"> ${i.main.temp.toFixed(0)}&deg;F`;            
            li.innerHTML = forcastContent;            
            forcastUL.appendChild(li);
            });
        
        document.querySelector("section.forcast").appendChild(forcastUL);    
    });
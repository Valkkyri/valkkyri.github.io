const alertAPIurl = "https://api.openweathermap.org/data/2.5/onecall?lat=20.501&lon=-86.94598&appid=91a14b3e44979104098259be0b0f8f5c&exclude=minutely,hourly&units=imperial";
// const alertAPIurl = "https://api.openweathermap.org/data/2.5/onecall?lat=39.297674445191234&lon=-120.6723689070876&appid=91a14b3e44979104098259be0b0f8f5c&exclude=minutely,hourly&units=imperial";

fetch(alertAPIurl)
    .then((response) => response.json())
    .then((weatherAlert) => {
        //console.log(weatherAlert);
        let alerts = weatherAlert.alerts;
        if (alerts != undefined) {
            let alertEvent = weatherAlert.alerts[0].event;
            let alertSender = weatherAlert.alerts[0].sender_name;
            let alertDescription = weatherAlert.alerts[0].description;

            let alertTitle = document.createElement("h3");
            let alertInfo = [alertSender, alertDescription];
            let article = document.createElement("article");
            let showButton = document.createElement("a");
            showButton.setAttribute("href", "#");
            showButton.setAttribute("class", "");
            showButton.innerText = "See more";

            let hideButton = document.createElement("a");
            hideButton.setAttribute("href", "#");
            hideButton.setAttribute("class", "hide");
            hideButton.innerText = "See less";

            let closeButton = document.createElement("a");
            closeButton.setAttribute("href", "#");
            closeButton.setAttribute("class", "close-button");
            closeButton.innerHTML = "close &times;";

            alertTitle.innerText = alertEvent;
            for (let i = 0; i < alertInfo.length; i++) {
                let paragraph = document.createElement("p");
                paragraph.innerHTML = alertInfo[i];
                article.appendChild(paragraph);
            };

            let weatherAlertSection = document.querySelector(".weather-alert");
            
            weatherAlertSection.appendChild(closeButton);
            weatherAlertSection.appendChild(alertTitle);
            weatherAlertSection.appendChild(showButton);
            weatherAlertSection.appendChild(hideButton);
            weatherAlertSection.appendChild(article);
            
            closeButton.addEventListener("click", () => {weatherAlertSection.classList.toggle("hide")}, true);
            
            showButton.addEventListener("click", () => {article.classList.toggle("show-hide")}, true);
            hideButton.addEventListener("click", () => {article.classList.toggle("show-hide")}, true);

            hideButton.addEventListener("click", () => {hideButton.classList.toggle("hide");showButton.classList.toggle("hide")});
            showButton.addEventListener("click", () => {showButton.classList.toggle("hide");hideButton.classList.toggle("hide")});
        }
    });
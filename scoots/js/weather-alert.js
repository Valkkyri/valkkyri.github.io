const alertAPIurl = "https://api.openweathermap.org/data/2.5/onecall?lat=20.501&lon=-86.94598&appid=91a14b3e44979104098259be0b0f8f5c&exclude=minutely,hourly&units=imperial";
// const alertAPIurl = "https://api.openweathermap.org/data/2.5/onecall?lat=41.0999142&lon=-115.866187&appid=91a14b3e44979104098259be0b0f8f5c&exclude=minutely,hourly&units=imperial";

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

            alertTitle.innerText = alertEvent;
            for (let i = 0; i < alertInfo.length; i++) {
                let paragraph = document.createElement("p");
                paragraph.innerHTML = alertInfo[i];
                article.appendChild(paragraph);
            };
            
            document.querySelector(".weather-alert").appendChild(alertTitle);
            document.querySelector(".weather-alert").appendChild(showButton);
            document.querySelector(".weather-alert").appendChild(hideButton);
            document.querySelector(".weather-alert").appendChild(article);

            showButton.addEventListener("click", () => {article.classList.toggle("show-hide");}, true);
            hideButton.addEventListener("click", () => {article.classList.toggle("show-hide");}, true);

            hideButton.addEventListener("click", () => {hideButton.classList.toggle("hide");showButton.classList.toggle("hide");});
            showButton.addEventListener("click", () => {showButton.classList.toggle("hide");hideButton.classList.toggle("hide");});
        }
    });
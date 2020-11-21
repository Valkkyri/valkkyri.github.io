// Kelvin to Fahrenheit FORMULA: (0K − 273.15) × 9/5 + 32 = -459.7°F
// Use "&units=imperial" at the end of the URL to avoid needing to do the conversion in the code

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=91a14b3e44979104098259be0b0f8f5c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let kelvin = jsObject.list[0].main.temp;
        fahrenheit = (kelvin - 273.15) * (9/5) + 32;
        document.querySelector("#current-temp").textContent = fahrenheit.toFixed(2);
        const iconSource = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
        const description = jsObject.list[0].main.description;
        document.querySelector("#imagesrc").textContent = iconSource;
        document.querySelector("#icon").setAttribute('src', iconSource);
        document.querySelector("#icon").setAttribute('alt', description);
    });


    
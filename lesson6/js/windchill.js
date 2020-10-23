window.onload = calculateWindchill();

function calculateWindchill() {
    let highTemp = parseFloat(document.querySelector("#high-temp").innerText);
    let windSpeed = parseFloat(document.querySelector("#wind-speed").innerText);
    let windChill = document.querySelector("#wind-chill").innerText = "N/A";

    if (highTemp <= 50 && windSpeed >= 3) {
        windChill = 35.74 + (0.6215 * highTemp) - (35.75 * windSpeed ** 0.16) + (0.4275 * highTemp * windSpeed ** 0.16);
        document.querySelector("#wind-chill").innerHTML = Math.round(windChill.toFixed(2)) + "&deg;F";
    }
    else {
        document.querySelector("#wind-chill").innerText = windChill;
    }
}
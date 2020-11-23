let highTemp_fish = parseFloat(document.querySelector(".high-temp-fish").innerText);
let highTemp_preston = parseFloat(document.querySelector(".high-temp-preston").innerText);
let highTemp_soda = parseFloat(document.querySelector(".high-temp-soda").innerText);
let highTemps = [highTemp_fish, highTemp_preston, highTemp_soda];

let windSpeed_fish = parseFloat(document.querySelector(".wind-speed-fish").innerText);
let windSpeed_preston = parseFloat(document.querySelector(".wind-speed-preston").innerText);
let windSpeed_soda = parseFloat(document.querySelector(".wind-speed-soda").innerText);
let windSpeeds = [windSpeed_fish, windSpeed_preston, windSpeed_soda];

let windChill_fish = document.querySelector(".wind-chill-fish").innerText = "N/A";
let windChill_preston = document.querySelector(".wind-chill-preston").innerText = "N/A";
let windChill_soda = document.querySelector(".wind-chill-soda").innerText = "N/A";
let windChills = [windChill_fish, windChill_preston, windChill_soda];

let windChillClasses = [".wind-chill-fish", ".wind-chill-preston", ".wind-chill-soda"];

for (let i = 0; i < 3; i++) {
    if (highTemps[i] <= 50 && windSpeeds[i] > 3) {    
        windChills[i] = 35.74 + (0.6215 * highTemps[i]) - (35.75 * windSpeeds[i] ** 0.16) + (0.4275 * highTemps[i] * windSpeeds[i] ** 0.16);
        document.querySelector(windChillClasses[i]).innerHTML = Math.round(windChills[i].toFixed(2)) + "&deg;F";
    }
    else {
        document.querySelector(windChillClasses[i]).innerText = windChills[i];
    }
}
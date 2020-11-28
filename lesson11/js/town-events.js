const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

let town = document.querySelector("#page-name").innerHTML;
let townName = "";

if (town == "Fish Haven") {
    townName = "Fish Haven";
} else if (town == "Preston Idaho") {
    townName = "Preston";
} else if (town == "Soda Springs") {
    townName = "Soda Springs";
};

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let towns = jsonObject["towns"];
        let thisTown = towns.filter(i => (i.name == townName));
        //console.log(thisTown);
        // Create elements
        let eventSection = document.createElement("section");
        let ul = document.createElement("ul"); // Container element (inside div)
        let h2 = document.createElement("h2");
        h2.innerText = `Events in ${town}`;
        
        // Array for LI element
        let townEvents = thisTown[0].events;
        townEvents.forEach(detail => {
            let events = detail.split(":");
            events = [`<strong>${events[0]}:</strong> ${events[1]}`];
            let li = document.createElement("li");
            li.innerHTML = events;
            ul.appendChild(li);
        });

        eventSection.appendChild(h2);
        eventSection.appendChild(ul);
        // Add content to page
        document.querySelector("section.events").appendChild(eventSection);
    });
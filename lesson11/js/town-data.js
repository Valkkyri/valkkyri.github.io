const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let towns = jsonObject["towns"];
        let townLinks = ["#", "preston", "#"];
        //let townLinks = ["fish-haven", "preston", "soda-springs"];
        let main3 = towns.filter(main3 => (main3.name == "Preston" || main3.name == "Fish Haven" || main3.name == "Soda Springs"));
        let i = 0;
        main3.forEach(town => {
            // Create elements
            let townInfo = document.createElement("section"); // Container element
            let townName = document.createElement("h3");
            let townNameLink = document.createElement("a");
            let townMotto = document.createElement("p");
            let ul = document.createElement("ul"); // Container element (inside div)
            let div = document.createElement("div"); // Container element
            let image = document.createElement("img");
            // Array for LI element
            let details = [`<strong>Year Founded</strong>: ${town.yearFounded}`, `<strong>Current Population</strong>: ${town.currentPopulation}`, `<strong>Average Rainfall</strong>: ${town.averageRainfall}"`];
            details.forEach(detail => {
                let li = document.createElement("li");
                li.innerHTML = detail;
                ul.appendChild(li);
            });

            // Set content and attributes for created elements
            townNameLink.setAttribute("href", `${townLinks[i]}.html`);
            image.setAttribute("src", `images/${town.photo}`);
            image.setAttribute("alt", `${town.name}, ${town.motto}`);
            townNameLink.textContent = town.name;
            townMotto.textContent = `"${town.motto}"`;

            // Add content to containing elements
            townInfo.appendChild(image);
            div.appendChild(townName);
            townName.appendChild(townNameLink);
            div.appendChild(townMotto);
            div.appendChild(ul);
            townInfo.appendChild(div);            
            
            // Add content to page
            document.querySelector("section.town-info").appendChild(townInfo);
            i++;
        }, i);
    });
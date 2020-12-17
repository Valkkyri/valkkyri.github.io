let rentalDataURL = "https://valkkyri.github.io/scoots/data/rental-data.json";

fetch(rentalDataURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (rentalData) {
        // let rentalLinks = ["fish-haven", "preston", "soda-springs"];
        let vehicleType = ["Honda Motor Scooters", "ATV Side-by-Side", "Jeep Rentals"];

        let i = 0;
        let scooterRentals = rentalData.rentals[0].scooter;
        let atvRentals = rentalData.rentals[0].atv;
        let jeepRentals = rentalData.rentals[0].jeep;
        
        scooterRentals.forEach(scooter => {
            // Create elements
            let rentalSection = document.createElement("section"); // Container element
            
            let tr = document.createElement("tr");
            let details = [`${scooter.name}`, `${scooter.maxPersons}`, `${scooter.reservation[0].halfDay}`, `${scooter.reservation[0].fullDay}`, `${scooter.walkIn[0].halfDay}`, `${scooter.walkIn[0].fullDay}`];
            details.forEach(detail => {
                let td = document.createElement("td");
                td.innerHTML = detail;
                tr.appendChild(td);                
            });
            document.querySelector("tbody#r-type-scooter").appendChild(tr);
            
            let rentalOverview = document.createElement("p");
            let image = document.createElement("img");

            // Set content and attributes for created elements
            image.setAttribute("src", `https://valkkyri.github.io/scoots/images/${scooter.image}`);
            image.setAttribute("alt", `${scooter.name}, ${scooter.model}`);
            rentalOverview.innerHTML = `${scooter.name}, ${scooter.model}`;

            // Add content to containing elements
            rentalSection.appendChild(image);            
            rentalSection.appendChild(rentalOverview);
            
            // Add content to page
            document.querySelector(".scooter-overview").appendChild(rentalSection);
            i++;
        }, i);

        atvRentals.forEach(atv => {
            // Create elements
            let rentalSection = document.createElement("section"); // Container element
            
            let rentalOverview = document.createElement("p");
            let image = document.createElement("img");

            let tr = document.createElement("tr");
            let details = [`${atv.name}`, `${atv.maxPersons}`, `${atv.reservation[0].halfDay}`, `${atv.reservation[0].fullDay}`, `${atv.walkIn[0].halfDay}`, `${atv.walkIn[0].fullDay}`];
            details.forEach(detail => {
                let td = document.createElement("td");
                td.innerHTML = detail;
                tr.appendChild(td);                
            });
            document.querySelector("tbody#r-type-atv").appendChild(tr);

            // Set content and attributes for created elements
            image.setAttribute("src", `https://valkkyri.github.io/scoots/images/${atv.image}`);
            image.setAttribute("alt", `${atv.name}, ${atv.model}`);
            rentalOverview.innerHTML = `${atv.name}, ${atv.model}`;

            // Add content to containing elements
            rentalSection.appendChild(image);            
            rentalSection.appendChild(rentalOverview);
            
            // Add content to page
            document.querySelector(".atv-overview").appendChild(rentalSection);
            i++;
        }, i);

        jeepRentals.forEach(jeep => {
            // Create elements
            let rentalSection = document.createElement("section"); // Container element
            
            let rentalOverview = document.createElement("p");
            let image = document.createElement("img");

            let tr = document.createElement("tr");
            let details = [`${jeep.name}`, `${jeep.maxPersons}`, `${jeep.reservation[0].halfDay}`, `${jeep.reservation[0].fullDay}`, `${jeep.walkIn[0].halfDay}`, `${jeep.walkIn[0].fullDay}`];
            details.forEach(detail => {
                let td = document.createElement("td");
                td.innerHTML = detail;
                tr.appendChild(td);                
            });
            document.querySelector("tbody#r-type-jeep").appendChild(tr);

            // Set content and attributes for created elements
            image.setAttribute("src", `https://valkkyri.github.io/scoots/images/${jeep.image}`);
            image.setAttribute("alt", `${jeep.name}, ${jeep.model}`);
            rentalOverview.innerHTML = `${jeep.name}, ${jeep.model}`;

            // Add content to containing elements
            rentalSection.appendChild(image);            
            rentalSection.appendChild(rentalOverview);
            
            // Add content to page
            document.querySelector(".jeep-overview").appendChild(rentalSection);
            i++;
        }, i);
    });
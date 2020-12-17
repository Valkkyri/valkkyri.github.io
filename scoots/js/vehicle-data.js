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
        
        // console.log(scooterRentals);
        // console.log(atvRentals);
        // console.log(jeepRentals);

        let rentalName = document.createElement("h3");
        rentalName.innerHTML = vehicleType[i];

        scooterRentals.forEach(scooter => {
            // Create elements
            let rentalSection = document.createElement("section"); // Container element
            
            // let rentalNameLink = document.createElement("a");
            let rentalOverview = document.createElement("p");
            let image = document.createElement("img");

            // Set content and attributes for created elements
            // rentalNameLink.setAttribute("href", `${rentalLinks[i]}.html`);
            image.setAttribute("src", `https://valkkyri.github.io/scoots/images/${scooter.image}`);
            image.setAttribute("alt", `${scooter.name}, ${scooter.model}`);
            // rentalNameLink.textContent = rentalType.name;
            rentalOverview.innerHTML = `${scooter.name}, ${scooter.model}`;

            // Add content to containing elements
            rentalSection.appendChild(image);
            // rentalName.appendChild(rentalNameLink);
            
            rentalSection.appendChild(rentalOverview);
            
            // Add content to page
            document.querySelector(".rental-overview").appendChild(rentalSection);
            i++;
        }, i);
        rentalSection.appendChild(rentalName);
    });
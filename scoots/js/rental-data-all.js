let rentalDataURL = "https://valkkyri.github.io/scoots/data/rental-data.json";

let i = 0;
fetch(rentalDataURL)
    .then((response) => response.json())
    .then((rentalData) => {
        console.log(rentalData);
        let vehicleType = ["Honda Motor Scooters", "ATV Side-by-Side", "Jeep Rentals"];        
        
        // SCOOTERS
        let scooterSection = document.createElement("section");
        scooterSection.setAttribute("class", "scooter-summary");
        let scooterTitle = document.createElement("h3");
        scooterTitle.innerHTML = vehicleType[0];
        let scooters = rentalData.rentals[0].scooter;
        let scooterUL = document.createElement("ul");
        scooters.forEach((i) => {
            let scootName = i.name;
            let scootPeeps = i.maxPersons;
            let scootImage = i.image;
            
            let scootInfo = document.createElement("li");
            scootInfo.innerHTML = `<img src="https://valkkyri.github.io/scoots/images/${scootImage}" alt="${scootName}"> ${scootName} -- ${scootPeeps} person`;
            scooterUL.appendChild(scootInfo);
        });
        scooterSection.appendChild(scooterTitle);
        scooterSection.appendChild(scooterUL);

        document.querySelector(".rental-overview").appendChild(scooterSection);

        // ATV
        let atvSection = document.createElement("section");
        atvSection.setAttribute("class", "atv-summary");
        let atvTitle = document.createElement("h3");
        atvTitle.innerHTML = vehicleType[1];
        let atv = rentalData.rentals[0].atv;
        let atvUL = document.createElement("ul");
        atv.forEach((i) => {
            let atvName = i.name;
            let atvPeeps = i.maxPersons;
            
            let atvInfo = document.createElement("li");
            atvInfo.innerHTML = `${atvName} -- ${atvPeeps} person`;
            atvUL.appendChild(atvInfo);
        });
        atvSection.appendChild(atvTitle);
        atvSection.appendChild(atvUL);

        document.querySelector(".rental-overview").appendChild(atvSection);


        // JEEP
        let jeepSection = document.createElement("section");
        jeepSection.setAttribute("class", "jeep-summary");
        let jeepTitle = document.createElement("h3");
        jeepTitle.innerHTML = vehicleType[2];
        let jeep = rentalData.rentals[0].jeep;
        let jeepUL = document.createElement("ul");
        jeep.forEach((i) => {
            let jeepName = i.name;
            let jeepPeeps = i.maxPersons;
            
            let jeepInfo = document.createElement("li");
            jeepInfo.innerHTML = `${jeepName} -- ${jeepPeeps} person`;
            jeepUL.appendChild(jeepInfo);
        });
        jeepSection.appendChild(jeepTitle);
        jeepSection.appendChild(jeepUL);
        
        document.querySelector(".rental-overview").appendChild(jeepSection);

        i++;
    }, i);
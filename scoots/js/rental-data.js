let rentalDataURL = "../data/rental-data.json";

fetch(rentalDataURL)
    .then((response) => response.json())
    .then((rentalData) => {
        console.log(rentalData);
    });
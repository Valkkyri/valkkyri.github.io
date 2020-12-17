window.onload = generateMenu();
window.onload = mobileMenu();

function generateMenu() {
    let pageTitle = document.querySelector("h2.page-title").innerHTML;
    // console.log(pageTitle);
    let ul = document.createElement("ul");
    ul.setAttribute("class", "menu");
    let menuLinkName = ["&#9776; Menu", "Home", "Rentals", "Reservations", "Tours", "Contact", "Book Now!"];
    let menuLink = ["#", "index.html", "rentals.html", "reservations.html", "tours.html", "contact.html", "reservations.html"];
    for (let i = 0; i < menuLinkName.length; i++) {
        let li = document.createElement("li");
        let aLink = document.createElement("a");
        aLink.setAttribute("href", menuLink[i]);
        if (menuLinkName[i] == pageTitle) {
            aLink.setAttribute("class", "active");
        } else if (menuLinkName[i] == "&#9776; Menu") {
            aLink.setAttribute("class", "mobile-nav");
        } else if (menuLinkName[i] == menuLinkName[6]) {
            aLink.setAttribute("class", "highlight");
        } else {
            aLink.removeAttribute("class");
        };
        aLink.innerHTML = menuLinkName[i];
        li.appendChild(aLink);        
        ul.appendChild(li);
    }

    document.querySelector(".global-menu").appendChild(ul);
}

// Mobile menu show/hide
function mobileMenu() {
    const menu = document.querySelector(".menu");
    const mobileNav = document.querySelector(".mobile-nav");

    mobileNav.addEventListener('click', () => {menu.classList.toggle('mobile-view');}, true);
}
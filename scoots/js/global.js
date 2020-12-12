window.onload = dates();

// Load webfonts
WebFont.load({google: {families: ['Audiowide', 'Lato']}});

// Find the current year & time last updated
function dates() {
    let today = new Date();
    let latestMod = document.lastModified;

    document.querySelector('.this-year').innerHTML = today.getFullYear();
    document.querySelector('.last-modified').innerHTML = `Last Updated: ${latestMod}`;
}

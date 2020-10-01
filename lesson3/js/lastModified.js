let latestMod = document.lastModified;
let today = new Date();

document.getElementById('latestModified').innerText = latestMod;
document.getElementById('currentYear').textContent = today.getFullYear();
window.onload = pancakes();

function pancakes() {
    let today = new Date();
    let day = today.getDay();

    if (day == 5) {
        document.getElementById('friday-only').style.display = 'block';
    }
    else {
        document.getElementById('friday-only').style.display = 'none';
    }
}
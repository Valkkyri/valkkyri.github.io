function currentDate() {
    let dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    let monthNames = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    let today = new Date();
    let todayName = dayNames[today.getDay()];
    let thisMonth = monthNames[today.getMonth()];
    let currentDate = todayName + ', ' + thisMonth + ' ' + today.getDate() + ' ' + today.getFullYear();
    let time = currentHour();

    document.getElementById('lastUpdated').textContent = currentDate + time;
    document.getElementById('currentYear').textContent = today.getFullYear();
}

function currentHour() {
    let today = new Date();
    let hour = today.getHours();
    let mins = currentMins();
    
    if (hour == 0) {
        return ' at ' + 12 + mins + ' AM';
    }
    else if (hour == 12) {
        return ' at ' + 12 + mins + ' PM';
    }
    else if (hour < 24 && hour > 12) {
        let pmHour = hour - 12;
        return ' at ' + pmHour + mins + ' PM';
    }
    else {
        let amHour = hour;
        return ' at ' + amHour + mins + ' AM';
    }    
}

function currentMins() {
    let today = new Date();
    let mins = today.getMinutes();
    if (mins < 10) {
        let smallMins = ':0' + mins;
        return smallMins;
    }
    else {
        return ':' + mins;
    }
    
}
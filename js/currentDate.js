// toLocaleDateString
/*
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
*/

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
]
const today = new Date();
const todayName = dayNames[today.getDay()];
const thisMonth = monthNames[today.getMonth()];

const currentDate = todayName + ', ' + thisMonth + ' ' + today.getDate() + ' ' + today.getFullYear();


document.getElementById('currentDate').textContent = currentDate;


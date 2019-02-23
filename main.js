var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock() {
    var time = new Date();
    var hours = (time.getHours() % 12).toString(); // Return a string representing an object.
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2) { // Length is indicating the length of a string.
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    // Format clock
    var clockString = hours + " : " + minutes + " . " + seconds;
    
    // Format hexa color
    var hexColorString = '#' + hours + minutes + seconds;

    clock.textContent = clockString;    // Change text content
    hexColor.textContent = hexColorString;

    document.body.style.background = hexColorString;
}

hexClock();
setInterval(hexClock, 1000);  // Calls a function at specified intervals.
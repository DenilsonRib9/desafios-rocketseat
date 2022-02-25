/*
    Countdown
*/

function updateTimer() {
    future = Date.parse("feb 28, 2022 12:30:00")

    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / (1000));

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer").innerHTML = '<div>' + d + '</div>' + '<div>' + ':' + '</div>' +
        '<div>' + h + '</div>' + '<div>' + ':' + '</div>' +
        '<div>' + m + '</div>' + '<div>' + ':' + '</div>' +
        '<div>' + s + '</div>';
}

setInterval('updateTimer()', 1000);
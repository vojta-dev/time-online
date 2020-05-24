let d;
let time;
let h, m, s;

// repeat the function every 0.1s
window.setInterval(getAndSetTime, 100)

function getAndSetTime() {

    // get the current date and time
    d = new Date();

    // set the current hours minutes and seconds
    h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();

    // format the time
    time = h + ':' + m + '.' + s;

    // set the time to html
    document.getElementById('time').innerText = time;
}
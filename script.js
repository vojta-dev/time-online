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
    let hFormated = h, mFormated = m, sFormated = s;
    if (h < 10) {
        hFormated = '0' + h;
    }
    if (m < 10) {
        mFormated = '0' + m;
    }
    if (s < 10) {
        sFormated = '0' + s;
    }
    time = hFormated + ':' + mFormated + '.' + sFormated;

    // set the time to html
    document.getElementById('time').innerText = time;
}
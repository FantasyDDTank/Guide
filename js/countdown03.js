const second03 = 1000,
    minute03 = second03 * 60,
    hour03 = minute03 * 60,
    day03 = hour03 * 24;

let starttime03 = new Date('November 1, 2021 00:00:00').getTime();
let countDown03 = new Date('December 1, 2021 00:00:00').getTime(),
    z = setInterval(function() {

        let now03 = new Date().getTime(),
            distance03 = countDown03 - now03;
        totaltime03 = countDown03 - starttime03;

        document.getElementById('days-03').innerText = Math.floor(distance03 / (day03)),
            document.getElementById('hours-03').innerText = Math.floor((distance03 % (day03)) / (hour03)),
            document.getElementById('minutes-03').innerText = Math.floor((distance03 % (hour03)) / (minute03)),
            document.getElementById('seconds-03').innerText = Math.floor((distance03 % (minute03)) / second03);

        // 1000 * 60
        // 1000 * 60 * 60
        // 1000 * 60 * 60 * 24
        if (distance03 < 0) {
            clearInterval(z);
            document.getElementById("countdown-03-title").style.display = 'none';
            document.getElementById("countdown-03-time").style.display = 'none';
        } else if (distance03 < 60000) {
            document.getElementById("c-days-03").style.display = 'none';
            document.getElementById("c-hours-03").style.display = 'none';
            document.getElementById("c-minutes-03").style.display = 'none';
            document.getElementById("c-seconds-03").style.display = 'block';
        } else if (distance03 < 3600000) {
            document.getElementById("c-days-03").style.display = 'none';
            document.getElementById("c-hours-03").style.display = 'none';
            document.getElementById("c-minutes-03").style.display = 'block';
            document.getElementById("c-seconds-03").style.display = 'none';
        } else if (distance03 < 86400000) {
            document.getElementById("c-days-03").style.display = 'none';
            document.getElementById("c-hours-03").style.display = 'block';
            document.getElementById("c-minutes-03").style.display = 'none';
            document.getElementById("c-seconds-03").style.display = 'none';
        } else {
            document.getElementById("c-days-03").style.display = 'block';
            document.getElementById("c-hours-03").style.display = 'none';
            document.getElementById("c-minutes-03").style.display = 'none';
            document.getElementById("c-seconds-03").style.display = 'none';
        }

    }, second03)

function progress03(timeleft03, timetotal03, $element03) {

    var timeleft03 = countDown03 - new Date().getTime();
    var timetotal03 = countDown03 - starttime03;
    var progressBarWidth03 = timeleft03 * $element03.width() / timetotal03;
    $element03.find('div').animate({ width: progressBarWidth03 }, 500);
    if (timeleft03 > 0) {
        setTimeout(function() {
            progress03(timeleft03 - 1, timetotal03, $element03);
        }, 1000);
    }
};

progress03("", "", $('#bar03'));
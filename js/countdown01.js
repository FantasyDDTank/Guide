const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let starttime = new Date('December 1, 2021 00:00:00').getTime();
let countDown = new Date('January 1, 2022 00:00:00').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;
        totaltime = countDown - starttime;

        document.getElementById('days-01').innerText = Math.floor(distance / (day)),
            document.getElementById('hours-01').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes-01').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds-01').innerText = Math.floor((distance % (minute)) / second);

        // 1000 * 60
        // 1000 * 60 * 60
        // 1000 * 60 * 60 * 24
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-01-title").style.display = 'none';
            document.getElementById("countdown-01-time").style.display = 'none';
        } else if (distance < 60000) {
            document.getElementById("c-days-01").style.display = 'none';
            document.getElementById("c-hours-01").style.display = 'none';
            document.getElementById("c-minutes-01").style.display = 'none';
            document.getElementById("c-seconds-01").style.display = 'block';
        } else if (distance < 3600000) {
            document.getElementById("c-days-01").style.display = 'none';
            document.getElementById("c-hours-01").style.display = 'none';
            document.getElementById("c-minutes-01").style.display = 'block';
            document.getElementById("c-seconds-01").style.display = 'none';
        } else if (distance < 86400000) {
            document.getElementById("c-days-01").style.display = 'none';
            document.getElementById("c-hours-01").style.display = 'block';
            document.getElementById("c-minutes-01").style.display = 'none';
            document.getElementById("c-seconds-01").style.display = 'none';
        } else {
            document.getElementById("c-days-01").style.display = 'block';
            document.getElementById("c-hours-01").style.display = 'none';
            document.getElementById("c-minutes-01").style.display = 'none';
            document.getElementById("c-seconds-01").style.display = 'none';
        }

    }, second)

function progress(timeleft, timetotal, $element) {
    
    var timeleft = countDown - new Date().getTime();
    var timetotal = countDown - starttime;
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500);
    if (timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

progress( "", "", $('#bar01'));
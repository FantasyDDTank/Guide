const second02 = 1000,
    minute02 = second02 * 60,
    hour02 = minute02 * 60,
    day02 = hour02 * 24;

let starttime02 = new Date('December 1, 2021 00:00:00').getTime();
let countDown02 = new Date('December 15, 2021 00:00:00').getTime(),
    y = setInterval(function() {

        let now02 = new Date().getTime(),
            distance02 = countDown02 - now02;
        totaltime02 = countDown02 - starttime02;

        document.getElementById('days-02').innerText = Math.floor(distance02 / (day02)),
            document.getElementById('hours-02').innerText = Math.floor((distance02 % (day02)) / (hour02)),
            document.getElementById('minutes-02').innerText = Math.floor((distance02 % (hour02)) / (minute02)),
            document.getElementById('seconds-02').innerText = Math.floor((distance02 % (minute02)) / second02);

        // 1000 * 60
        // 1000 * 60 * 60
        // 1000 * 60 * 60 * 24
        if (distance02 < 0) {
            clearInterval(y);
            document.getElementById("countdown-02-title").style.display = 'none';
            document.getElementById("countdown-02-time").style.display = 'none';
        } else if (distance02 < 60000) {
            document.getElementById("c-days-02").style.display = 'none';
            document.getElementById("c-hours-02").style.display = 'none';
            document.getElementById("c-minutes-02").style.display = 'none';
            document.getElementById("c-seconds-02").style.display = 'block';
        } else if (distance02 < 3600000) {
            document.getElementById("c-days-02").style.display = 'none';
            document.getElementById("c-hours-02").style.display = 'none';
            document.getElementById("c-minutes-02").style.display = 'block';
            document.getElementById("c-seconds-02").style.display = 'none';
        } else if (distance02 < 86400000) {
            document.getElementById("c-days-02").style.display = 'none';
            document.getElementById("c-hours-02").style.display = 'block';
            document.getElementById("c-minutes-02").style.display = 'none';
            document.getElementById("c-seconds-02").style.display = 'none';
        } else {
            document.getElementById("c-days-02").style.display = 'block';
            document.getElementById("c-hours-02").style.display = 'none';
            document.getElementById("c-minutes-02").style.display = 'none';
            document.getElementById("c-seconds-02").style.display = 'none';
        }

    }, second02)

function progress02(timeleft02, timetotal02, $element02) {

    var timeleft02 = countDown02 - new Date().getTime();
    var timetotal02 = countDown02 - starttime02;
    var progressBarWidth02 = timeleft02 * $element02.width() / timetotal02;
    $element02.find('div').animate({ width: progressBarWidth02 }, 500);
    if (timeleft02 > 0) {
        setTimeout(function() {
            progress02(timeleft02 - 1, timetotal02, $element02);
        }, 1000);
    }
};

progress02("", "", $('#bar02'));
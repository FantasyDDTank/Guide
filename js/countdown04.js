const second04 = 1000,
    minute04 = second04 * 60,
    hour04 = minute04 * 60,
    day04 = hour04 * 24;

let starttime04 = new Date('November 11, 2021 00:00:00').getTime();
let countDown04 = new Date('January 12, 2022 00:00:00').getTime(),
    w = setInterval(function() {

        let now04 = new Date().getTime(),
            distance04 = countDown04 - now04;
        totaltime04 = countDown04 - starttime04;

        document.getElementById('days-04').innerText = Math.floor(distance04 / (day04)),
            document.getElementById('hours-04').innerText = Math.floor((distance04 % (day04)) / (hour04)),
            document.getElementById('minutes-04').innerText = Math.floor((distance04 % (hour04)) / (minute04)),
            document.getElementById('seconds-04').innerText = Math.floor((distance04 % (minute04)) / second04);

        // 1000 * 60
        // 1000 * 60 * 60
        // 1000 * 60 * 60 * 24
        if (distance04 < 0) {
            clearInterval(w);
            document.getElementById("countdown-04-title").style.display = 'none';
            document.getElementById("countdown-04-time").style.display = 'none';
        } else if (distance04 < 60000) {
            document.getElementById("c-days-04").style.display = 'none';
            document.getElementById("c-hours-04").style.display = 'none';
            document.getElementById("c-minutes-04").style.display = 'none';
            document.getElementById("c-seconds-04").style.display = 'block';
        } else if (distance04 < 3600000) {
            document.getElementById("c-days-04").style.display = 'none';
            document.getElementById("c-hours-04").style.display = 'none';
            document.getElementById("c-minutes-04").style.display = 'block';
            document.getElementById("c-seconds-04").style.display = 'none';
        } else if (distance04 < 86400000) {
            document.getElementById("c-days-04").style.display = 'none';
            document.getElementById("c-hours-04").style.display = 'block';
            document.getElementById("c-minutes-04").style.display = 'none';
            document.getElementById("c-seconds-04").style.display = 'none';
        } else {
            document.getElementById("c-days-04").style.display = 'block';
            document.getElementById("c-hours-04").style.display = 'none';
            document.getElementById("c-minutes-04").style.display = 'none';
            document.getElementById("c-seconds-04").style.display = 'none';
        }

    }, second04)

function progress04(timeleft04, timetotal04, $element04) {

    var timeleft04 = countDown04 - new Date().getTime();
    var timetotal04 = countDown04 - starttime04;
    var progressBarWidth04 = timeleft04 * $element04.width() / timetotal04;
    $element04.find('div').animate({ width: progressBarWidth04 }, 500);
    if (timeleft04 > 0) {
        setTimeout(function() {
            progress04(timeleft04 - 1, timetotal04, $element04);
        }, 1000);
    }
};

progress04("", "", $('#bar04'));
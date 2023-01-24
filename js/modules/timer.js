import {getZero} from  "./functions";

function timer(timerSelector,deadLine){

    function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const mlSecondsLeft = Date.parse(endTime) - Date.parse(new Date());

        if (mlSecondsLeft <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(mlSecondsLeft / (1000 * 60 * 60 * 24));
            hours = Math.floor((mlSecondsLeft / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((mlSecondsLeft / (1000 * 60)) % 60);
            seconds = Math.floor((mlSecondsLeft / (1000)) % 60);
        }

        return {
            'mlSecondsLeft': mlSecondsLeft, days, hours, minutes, seconds
        };
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const allData = getTimeRemaining(endTime);
            days.innerHTML = getZero(allData.days);
            hours.innerHTML = getZero(allData.hours);
            minutes.innerHTML = getZero(allData.minutes);
            seconds.innerHTML = getZero(allData.seconds);

            if (allData.mlSecondsLeft <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(timerSelector, deadLine);
}

 export default  timer ;
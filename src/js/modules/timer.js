const timer = (id, deadline) => {

    const addZeroToNum = (num) => {
        return num <= 9 ? "0" + num : num;
    }

    const getTimeRemaining = (deadline) => {
        const totalTime = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor(totalTime / (1000 * 60 * 60 * 24)),
            hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((totalTime / 1000 / 60) % 60),
            seconds = Math.floor((totalTime / 1000) % 60);

        return {
            totalTime,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const setClock = (selector, deadline) => {
        const timer = document.querySelector(selector),
            daysEl = timer.querySelector('#days'),
            hoursEl = timer.querySelector('#hours'),
            minutesEl = timer.querySelector('#minutes'),
            secondsEl = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTime, 1000);

        updateTime();

        function updateTime() {
            const t = getTimeRemaining(deadline)

            daysEl.textContent = addZeroToNum(t.days);
            hoursEl.textContent = addZeroToNum(t.hours);
            minutesEl.textContent = addZeroToNum(t.minutes);
            secondsEl.textContent = addZeroToNum(t.seconds);

            if (t.totalTime <= 0) {
                daysEl.textContent = "00";
                hoursEl.textContent = "00";
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };
    setClock(id, deadline);
};

export default timer;

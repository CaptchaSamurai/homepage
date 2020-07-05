let minMinutes = 13 * 60;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

        if (timer == 0) {
            alert('Zmiana!');
            location.reload();
        }

    }, 1000);
}

window.onload = function () {
    var minutes = 12 //minMinutes + 60 * Math.floor(Math.random() * 21),
        display = document.querySelector('#time');
    startTimer(minutes, display);
};

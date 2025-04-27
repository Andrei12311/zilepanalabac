const deadline = new Date('2025-06-10T00:00:00'); // Data BAC-ului
const countdownElements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
};

function updateCountdown() {
    const now = new Date();
    const timeRemaining = deadline - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElements.days.textContent = days;
    countdownElements.hours.textContent = hours;
    countdownElements.minutes.textContent = minutes;
    countdownElements.seconds.textContent = seconds;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        countdownElements.days.textContent = "0";
        countdownElements.hours.textContent = "0";
        countdownElements.minutes.textContent = "0";
        countdownElements.seconds.textContent = "0";
    }
}

// Updatează numărătoarea la fiecare secundă
const interval = setInterval(updateCountdown, 1000);

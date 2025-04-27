// Setează data examenului Bacalaureat
const dataBac = new Date("2025-06-10T09:00:00").getTime();

// Actualizează numărătoarea inversă la fiecare secundă
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculăm zilele, orele, minutele și secundele rămase
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afișează rezultatele în HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Dacă numărătoarea inversă a ajuns la zero
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Numărătoarea s-a terminat!";
    }
}, 1000);

// Setează data examenului Bacalaureat
const dataBac = new Date("2025-06-10T09:00:00").getTime();

// Actualizează timpul la fiecare secundă
const interval = setInterval(function() {

    // Obține data și ora curentă
    const acum = new Date().getTime();

    // Calculează diferența în milisecunde
    const diferenta = dataBac - acum;

    // Calculează zilele, orele, minutele și secundele
    const zile = Math.floor(diferenta / (1000 * 60 * 60 * 24));
    const ore = Math.floor((diferenta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((diferenta % (1000 * 60 * 60)) / (1000 * 60));
    const secunde = Math.floor((diferenta % (1000 * 60)) / 1000);

    // Afișează rezultatele
    document.getElementById("zile").innerHTML = zile + " zile";
    document.getElementById("ore").innerHTML = ore + " ore";
    document.getElementById("minute").innerHTML = minute + " minute";
    document.getElementById("secunde").innerHTML = secunde + " secunde";

    // Dacă s-a ajuns la data examenului
    if (diferenta < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "<h2>Felicitări! A sosit ziua examenului!</h2>";
    }
}, 1000);

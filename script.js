// Data pentru examenul de BAC (poți înlocui cu data corectă)
const dataBac = new Date("2025-06-10T08:00:00").getTime();

// Actualizează cronometru-ul la fiecare secundă
let x = setInterval(function() {
    
    // Obține data și ora curentă
    let now = new Date().getTime();
    
    // Calculul diferenței de timp între data curentă și data BAC
    let distance = dataBac - now;
    
    // Calculul zilelor, orelor, minutelor și secundelor
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Afișează numărătoarea inversă
    document.getElementById("countdown").innerHTML = days + " zile " + hours + " ore " + minutes + " minute " + seconds + " secunde";
    
    // Când data este ajunsă, oprește cronometru-ul și afișează un mesaj
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "BAC-ul a început!";
    }
}, 1000);

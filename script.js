// Data pentru examenul de BAC: 10 iunie 2025, ora 08:00 AM
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

/ Selectăm toate elementele video
const videos = document.querySelectorAll('video');
let currentVideoIndex = 0;

// Funcția pentru a schimba videoclipurile
function changeVideo() {
    // Ascunde videoclipul curent
    videos[currentVideoIndex].style.display = 'none';

    // Mergem la următorul videoclip (dacă este ultimul, revenim la primul)
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;

    // Arată următorul videoclip
    videos[currentVideoIndex].style.display = 'block';
}

// Setăm un event listener pentru fiecare video pentru a schimba la următorul videoclip când se termină
videos.forEach((video, index) => {
    video.addEventListener('ended', changeVideo);
});

// Pornim primul videoclip
videos[currentVideoIndex].style.display = 'block';

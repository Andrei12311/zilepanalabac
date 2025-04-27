<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sunt cel mai tare</title>
    <link rel="stylesheet" href="style.css"> <!-- link către fișierul CSS -->
</head>
<body>

<!-- Container pentru video -->
<div id="video-container">
    <!-- Primul videoclip -->
    <video id="video1" autoplay muted>
        <source src="video_apus_1.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <!-- Al doilea videoclip -->
    <video id="video2" muted style="display:none;">
        <source src="video_apus_2.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <!-- Al treilea videoclip -->
    <video id="video3" muted style="display:none;">
        <source src="video_apus_3.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <!-- Al patrulea videoclip -->
    <video id="video4" muted style="display:none;">
        <source src="video_apus_4.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

<!-- Containerul care va conține numărătoarea inversă -->
<div class="container">
    <h1>Sunt cel mai tare</h1>
    <div id="countdown"></div> <!-- Numărătoarea inversă -->
</div>

<!-- Link către fișierul JavaScript -->
<script src="script.js"></script>

<script>
// Data pentru examenul de BAC
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
</script>

</body>
</html>

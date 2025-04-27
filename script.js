const dataBac = new Date('2025-06-16T00:00:00');
const azi = new Date();
const diferenta = dataBac - azi;
const zileRamase = Math.ceil(diferenta / (1000 * 60 * 60 * 24));
document.getElementById('zile').textContent = zileRamase;

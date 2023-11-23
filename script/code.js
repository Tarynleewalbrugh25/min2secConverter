let minInput = document.getElementById('min');
let secInput = document.getElementById('sec');
function calculate() {
    let min = parseInt(minInput.value);
    let sec = min * 60  ;
    if (!isNaN(sec)) {
        secInput.value = sec;
    } else {
        secInput.value = ''; 
    }
}
minInput.addEventListener('input', calculate);
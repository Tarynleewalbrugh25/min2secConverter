let minInput = document.getElementById('min');
let secOutput = document.getElementById('sec');
function calculate() {
    let min = parseInt(minInput.value);
    let sec = min * 60  ;
    if (!isNaN(sec)) {
        secOutput.value = sec;
    } else {
        secOutput.value = ''; 
    }

    
}
minInput.addEventListener('input', calculate);
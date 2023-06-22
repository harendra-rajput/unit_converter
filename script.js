var feetInput = document.getElementById('feetInput');
var inchOutput = document.getElementById('inchOutput');

feetInput.addEventListener('input', function() {
    let feet = parseFloat(feetInput.value);
    let inches = feet * 12;

    if (!isNaN(inches)) {
        inchOutput.value = inches;
    } else {
        inchOutput.value = '';
    }
});
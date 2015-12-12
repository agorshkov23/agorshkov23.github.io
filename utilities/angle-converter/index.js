window.onload = function() {
    var coeff = 10e8;

    var $deg = document.getElementById("deg");
    var $rad = document.getElementById("rad");
    var $rad8 = document.getElementById("rad8");

    $deg.addEventListener("input", calc, false);
    $rad.addEventListener("input", calc, false);
    $rad8.addEventListener("input", calc, false);

    $deg.addEventListener("keyup", calc, false);
    $rad.addEventListener("keyup", calc, false);
    $rad8.addEventListener("keyup", calc, false);

    function calc(event) {
        var value = event.target.value;

        if (event.target === $deg) {
            $rad8.value = radToRad8($rad.value = degToRad(value));
        }

        if (event.target === $rad) {
            $deg.value = radToDeg(value);
            $rad8.value = radToRad8(value);
        }

        if (event.target === $rad8) {
            $deg.value = radToDeg($rad.value = rad8ToRad(value));
        }
    }

    function degToRad(value) { return value * Math.PI / 180; }

    function radToDeg(value) { return value * 180 / Math.PI; }

    function radToRad8(value) { return Math.round(value * coeff); }

    function rad8ToRad(value) { return value / coeff; }

}
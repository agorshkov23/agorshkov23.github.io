function init () {
    var $source = document.getElementById("source");
    var $result = document.getElementById("result");

    function format(event) {
        if (event.target === $source) {
            $result.value = sqlFormatter.format($source.value);
        }
    }

    $source.addEventListener("paste", format);
    $source.addEventListener("keyup", format);
    $source.addEventListener("change", format);
}

init();
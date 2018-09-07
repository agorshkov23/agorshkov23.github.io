console.log("icecast2json");
function parseStreams() {
    const streams = [];
    for (let $frame of document.getElementsByTagName("frame")) {
        if (!$frame.src.endsWith("/status.xsl")) {
            continue;
        }
        const $frameDocument = $frame.contentDocument;
        for (let $newscontent of $frameDocument.querySelectorAll(".newscontent")) {
            const mountPoint = $newscontent.querySelector("h3").textContent.replace("Mount Point", "").trim();
            const $table = $newscontent.lastChild;
            const $trs = $table.querySelectorAll("tr");
            const stream = {
                mountPoint: mountPoint,
                title: $trs[0].querySelector(".streamdata").textContent,
                description: $trs[1].querySelector(".streamdata").textContent,
                contentType: $trs[2].querySelector(".streamdata").textContent,
                bitrate: +$trs[4].querySelector(".streamdata").textContent,
                genre: $trs[7].querySelector(".streamdata").textContent,
                url: location.href + mountPoint,
            };
            streams.push(stream);
        }
    }
    return streams;
    const $streams = document.getElementsByClassName("newscontent");
    debugger;
    for (let i = 0; i < $streams.length; i++) {
        const $stream = $streams[i];
        const mountPoint = $stream.getElementsByTagName("h3")[0].textContent.replace("Mount Point ", "");
        console.log(mountPoint);
        const $title = $stream.querySelector("table tr:nth-child(0)");
        const stream = {
            mountPoint: mountPoint,
        };
        streams.push(stream);
    }
    return streams;
}
console.dir(parseStreams());

let hidePeskyMessage = function () {
    let hostname = window.location.hostname
    if (hiders.has(hostname)) {
        hiders.get(hostname)()
    }
}

let setIntervalX = function (callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {
        callback();
        if (++x === repetitions) {
            window.clearInterval(intervalID)
        }
    }, delay);
}

setIntervalX(hidePeskyMessage, 100, 20)

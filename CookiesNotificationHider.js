let hidePeskyMessage = function () {
    let hostname = window.location.hostname
    if (hiders.has(hostname)) {
        hiders.get(hostname)()
    }
}

setIntervalX(hidePeskyMessage, 100, 20)

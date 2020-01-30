let setIntervalX = function (callback, delay, repetitions) {
    var nbRuns = 0;
    var intervalID = window.setInterval(function () {
        callback();
        if (++nbRuns === repetitions) {
            window.clearInterval(intervalID)
        }
    }, delay);
}

let hidePeskyMessage = function () {
    let hostname = window.location.hostname

    //first, find generic cookie notification providers.
    // If found, remove the message and go no further
    let quantcastMessage = document.querySelector(".qc-cmp-ui-container.qc-cmp-showing")
    if (quantcastMessage) {
        hideQuantcast()
        return
    }

    // No generic message, search in site-specific database
    if (hideCookieMessage === null) {
        //nothing to do: we searched the database and failed to find a match
    } else if (hideCookieMessage !== undefined) {
        hideCookieMessage()
    } else if (hiders.containsHostname(hostname)) {
        hiders.get(hostname)()
    }
}

setIntervalX(hidePeskyMessage, 100, 20)

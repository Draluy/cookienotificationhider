let setIntervalX = function (callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {
        callback();
        if (++x === repetitions) {
            window.clearInterval(intervalID)
        }
    }, delay);
}


let hide = (elt) => {
    elt.style.cssText = 'display:none !important';
}

let hiders = new Map()

hiders.set("developers.google.com", () => {
    hide(document.querySelector(".devsite-notification-promo"))
})
hiders.set("mashable.com", () => {
    hide(document.querySelector("#_evidon-barrier-wrapper"))
    hide(document.querySelector("#peek div[data-reactroot]"))
})
hiders.set("slashdot.org", () => {
    hide(document.querySelector(".qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("stackoverflow.com", () => {
    hide(document.querySelector("#js-gdpr-consent-banner"))
})
hiders.set("twitter.com", () => {
    hide(document.querySelector("#banners"))
})
hiders.set("wordpress.com", () => {
    hide(document.querySelector(".custom-cookie-banner"))
})
hiders.set("uk.reuters.com", () => {
    hide(document.querySelector("#_evidon_banner"))
})
hiders.set("www.6play.fr", () => {
    hide(document.querySelector(".banner--gdpr"))
})
hiders.set("www.bbc.com", () => {
    hide(document.querySelector("#cookiePrompt"))
})
hiders.set("www.bing.com", () => {
    hide(document.querySelector("#thp_notf_div"))
})
hiders.set("www.bloomberg.com", () => {
    hide(document.querySelector("#paywall-banner"))
})
hiders.set("www.cnbc.com", () => {
    hide(document.querySelector("#_evh-ric"))
})
hiders.set("www.cnet.com", () => {
    hide(document.querySelector("#_evidon_banner"))
})
hiders.set("www.dailymotion.com", () => {
    hide(document.querySelector("div[class^='Header__gdpr']"))
})
hiders.set("www.facebook.com", () => {
    hide(document.querySelector(".fbPageBanner"))
})
hiders.set("www.google.com", () => {
    hide(document.querySelector("#lb"))
    document.querySelector("html").style.overflow = 'scroll'
})
hiders.set("www.google.fr", () => {
    hide(document.querySelector(".fbar"))
})
hiders.set("www.instagram.com", () => {
    hide(document.querySelector(".lOPC8"))
})
hiders.set("www.linkedin.com", () => {
    hide(document.querySelector("#global-alert-queue"))
})
hiders.set("www.microsoft.com", () => {
    hide(document.querySelector("#uhfCookieAlert"))
})
hiders.set("www.nytimes.com", () => {
    hide(document.querySelector(".shown.expanded"))
})
hiders.set("www.pinterest.com", () => {
    hide(document.querySelector(".outerCookieBar"))
})
hiders.set("www.reddit.com", () => {
    hide(document.querySelector(".hvdZkC"))
})
hiders.set("www.tf1.fr", () => {
    hide(document.querySelector(".banner_cookies"))
})
hiders.set("www.theguardian.com", () => {
    hide(document.querySelector(".site-message--first-pv-consent"))
})
hiders.set("www.thenation.com", () => {
    hide(document.querySelector("#cookies-policy"))
})
hiders.set("www.theverge.com", () => {
    hide(document.querySelector("#privacy-consent"))
})
hiders.set("www.twitch.tv", () => {
    hide(document.querySelector(".gdpr-consent-banner"))
})
hiders.set("www.youtube.com", () => {
    hide(document.querySelector("#ticker"))
    hide(document.querySelector("iron-overlay-backdrop"))
    hide(document.querySelector("#consent-bump"))
    // TODO: make this work: window.document.getElementById("movie_player").playVideo()
})

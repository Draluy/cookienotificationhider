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

hiders.set("commande.dominos.fr", () => {
    hide(document.querySelector(".optanon-alert-box-wrapper"))
})
hiders.set("developers.google.com", () => {
    hide(document.querySelector(".devsite-notification-promo"))
})
hiders.set("mashable.com", () => {
    hide(document.querySelector("#_evidon-barrier-wrapper"))
    hide(document.querySelector("#peek div[data-reactroot]"))
})
hiders.set("medium.com", () => {
    hide(document.querySelector(".overlay"))
    document.querySelector("body").style.overflow = 'scroll'
})
hiders.set("muli-cycles.de", () => {
    hide(document.querySelector(".basicLightbox"))
})
hiders.set("newrepublic.com", () => {
    hide(document.querySelector(".site-popup.consent"))
})
hiders.set("slashdot.org", () => {
    hide(document.querySelector(".qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("stackoverflow.com", () => {
    hide(document.querySelector("#js-gdpr-consent-banner"))
})
hiders.set("streamable.com", () => {
    hide(document.querySelector("div[class^='app_gdpr']"))
})
hiders.set("theoutline.com", () => {
    hide(document.querySelector("#CybotCookiebotDialog"))
})
hiders.set("towardsdatascience.com", () => {
    hide(document.querySelector(".butterBar"))
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
hiders.set("www.atlasobscura.com", () => {
    hide(document.querySelector("#cookie-consent-modal"))
    hide(document.querySelector(".modal-backdrop"))
    document.querySelector("body").classList.remove("modal-open")
})

hiders.set("www.backmarket.fr", () => {
    hide(document.querySelector(".banner.paper"))
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
hiders.set("www.buzzfeed.com", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.challenges.fr", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.citylab.com", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.cnbc.com", () => {
    hide(document.querySelector("#_evh-ric"))
})
hiders.set("www.cnet.com", () => {
    hide(document.querySelector("#_evidon_banner"))
})
hiders.set("www.dailymail.co.uk", () => {
    hide(document.querySelector(".mol-ads-cmp"))
})
hiders.set("www.dailymotion.com", () => {
    hide(document.querySelector("div[class^='Header__gdpr']"))
})
hiders.set("www.esquire.com", () => {
    hide(document.querySelector("#_evidon-banner"))
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
hiders.set("www.infoconcert.com", () => {
    hide(document.querySelector("#notification-cookies"))
})
hiders.set("www.instagram.com", () => {
    hide(document.querySelector(".lOPC8"))
})
hiders.set("www.leetchi.com", () => {
    hide(document.querySelector("#AcceptCookiesBanner"))
})
hiders.set("www.lesnumeriques.com", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.linkedin.com", () => {
    hide(document.querySelector("#global-alert-queue"))
})
hiders.set("www.microsoft.com", () => {
    hide(document.querySelector("#uhfCookieAlert"))
})
hiders.set("www.newsweek.com", () => {
    hide(document.querySelector("#didomi-host"))
})
hiders.set("www.nytimes.com", () => {
    hide(document.querySelector(".shown.expanded"))
})
hiders.set("www.pcgamer.com", () => {
    hide(document.querySelector("#cmp-container-id"))
})
hiders.set("www.pinterest.com", () => {
    hide(document.querySelector(".outerCookieBar"))
})
hiders.set("www.polygon.com", () => {
    hide(document.querySelector("#privacy-consent"))
})
hiders.set("www.quechoisir.org", () => {
    hide(document.querySelector("#bannerCnil"))
})
hiders.set("www.reddit.com", () => {
    //hide(document.querySelector("#SHORTCUT_FOCUSABLE_DIV > div:nth-of-type(2):has(form)"))
})
hiders.set("www.siemens-home.bsh-group.com", () => {
    hide(document.querySelector(".o-cookielaw"))
})
hiders.set("www.sudinfo.be", () => {
    hide(document.querySelector("#cookiesdirective"))
})
hiders.set("www.techradar.com", () => {
    hide(document.querySelector("#cmp-container-id"))
    hide(document.querySelector("div[class^='sp_message_container'"))
    hide(document.querySelector("div[class^='sp_veil'"))
    document.querySelector("body").style["overflow-y"] = "scroll"
})
hiders.set("www.themarysue.com", () => {
    hide(document.querySelector("#CybotCookiebotDialogBodyUnderlay"))
    hide(document.querySelector("#CybotCookiebotDialog"))
    document.querySelector("body").style.overflow = "scroll"
})
hiders.set("www.tf1.fr", () => {
    hide(document.querySelector(".banner_cookies"))
})
hiders.set("www.theatlantic.com", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
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
hiders.set("www.tomshardware.com", () => {
    hide(document.querySelector(".prism-modal"))
})
hiders.set("www.twitch.tv", () => {
    hide(document.querySelector(".gdpr-consent-banner"))
})
hiders.set("www.rockpapershotgun.com", () => {
    hide(document.querySelector(".cookie-gdpr"))
})
hiders.set("www.sciencesetavenir.fr", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.vox.com", () => {
    hide(document.querySelector("#privacy-consent"))
})
hiders.set("www.whosampled.com", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.youtube.com", () => {
    hide(document.querySelector("#ticker"))
    hide(document.querySelector("iron-overlay-backdrop"))
    hide(document.querySelector("#consent-bump"))
    // TODO: make this work: window.document.getElementById("movie_player").playVideo()
})

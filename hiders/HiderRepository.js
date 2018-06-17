let hide = (elt) => {
    elt.style.cssText = 'display:none !important';
}

let hiders = new Map()

hiders.set("www.tf1.fr", () => {
    hide(document.querySelector(".banner_cookies"))
})
hiders.set("www.6play.fr", () => {
    hide(document.querySelector(".banner--gdpr"))
})
hiders.set("www.reddit.com", () => {
    hide(document.querySelector(".hvdZkC"))
})
hiders.set("www.google.fr", () => {
    hide(document.querySelector(".fbar"))
})
hiders.set("slashdot.org", () => {
    hide(document.querySelector(".qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.theguardian.com", () => {
    hide(document.querySelector(".site-message--first-pv-consent"))
})
hiders.set("www.facebook.com", () => {
    hide(document.querySelector(".fbPageBanner"))
})
hiders.set("www.youtube.com", () => {
    hide(document.querySelector("#ticker"))
})
hiders.set("twitter.com", () => {
    hide(document.querySelector("#banners"))
})
hiders.set("www.bing.com", () => {
    hide(document.querySelector("#thp_notf_div"))
})
hiders.set("www.microsoft.com", () => {
    hide(document.querySelector("#uhfCookieAlert"))
})
hiders.set("www.linkedin.com", () => {
    hide(document.querySelector("#global-alert-queue"))
})
hiders.set("www.pinterest.com", () => {
    hide(document.querySelector(".outerCookieBar"))
})
hiders.set("wordpress.com", () => {
    hide(document.querySelector(".custom-cookie-banner"))
})
hiders.set("www.instagram.com", () => {
    hide(document.querySelector(".lOPC8"))
})
hiders.set("www.twitch.tv", () => {
    hide(document.querySelector(".gdpr-consent-banner"))
})
hiders.set("www.dailymotion.com", () => {
    hide(document.querySelector("div[class^='Header__gdpr']"))
})
hiders.set("stackoverflow.com", () => {
    hide(document.querySelector("#js-gdpr-consent-banner"))
})
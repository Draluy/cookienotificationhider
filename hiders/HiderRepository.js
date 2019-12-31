let hide = (elt) => {
    elt.style.cssText = 'display:none !important';
}

let hideAll = (elts) => {
    elts.forEach((elt => hide(elt)));
}

let hideQuantcast = () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
}

hiders.containsHostname = (hostname) => {
    hideCookieMessage = null
    for (let [matchingStr, value] of hiders) {
        matchingStr = matchingStr.replace("*", "(?:.*?)")
        matchingStr = matchingStr.replace(/\./g, "\\\.")
        if (RegExp(matchingStr).test(hostname)){
            hideCookieMessage = value
            break
        }
    }

    return hideCookieMessage !== null
}

hiders.set("bibliotheques.paris.fr", () => {
    hide(document.querySelector("#cnil_banner_container"))
})
hiders.set("*.blogspot.com", () => {
    hide(document.querySelector("#cookieChoiceInfo"))
})
hiders.set("blogs.scientificamerican.com", () => {
    hide(document.querySelector(".optanon-alert-box-wrapper"))
})
hiders.set("*.cnn.com", () => {
    hide(document.querySelector(".optanon-alert-box-wrapper"))
    hide(document.querySelector("#optanon"))
})
hiders.set("commande.dominos.fr", () => {
    hide(document.querySelector(".optanon-alert-box-wrapper"))
})
hiders.set("developers.google.com", () => {
    hide(document.querySelector(".devsite-notification-promo"))
})
hiders.set("donnons.org", () => {
    hide(document.querySelector(".qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("dd-wrt.com", () => {
    hide(document.querySelector(".cookie-notice-container"))
})
hiders.set("fr.mappy.com", () => {
    hide(document.querySelector("#IndexView-first-visit"))
})
hiders.set("freesound.org", () => {
    hide(document.querySelector("#cookie-bar"))
})
hiders.set("izismile.com", () => {
    hideQuantcast()
})
hiders.set("krita.org", () => {
    hide(document.querySelector("#cookies-message"))
})
hiders.set("larousse.fr", () => {
    hide(document.querySelector(".optanon-alert-box-wrapper"))
    hide(document.querySelector("#optanon"))
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
hiders.set("motherboard.vice.com", () => {
    hideAll(document.querySelectorAll("div#root ~ div"))
    document.querySelector("body").style.overflowY = "scroll"
})
hiders.set("mydhl.express.dhl", () => {
    hide(document.querySelector(".cookies-policy"))
})
hiders.set("nationalpost.com", () => {
    hide(document.querySelector(".fc-dialog-container"))
})
hiders.set("phys.org", () => {
    hide(document.querySelector("#js-popup-cookies"))
})
hiders.set("*.shadow.tech", () => {
    hide(document.querySelector("footer + div"))
    hide(document.querySelector("footer + footer + div"))
})
hiders.set("shadow.tech", () => {
    hide(document.querySelector("#__next > div + div"))
})
hiders.set("slashdot.org", () => {
    hide(document.querySelector(".qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("stackexchange.com", () => {
    hide(document.querySelector("#js-gdpr-consent-banner"))
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
hiders.set("uk.reuters.com", () => {
    hide(document.querySelector("#_evidon_banner"))
})
hiders.set("wordpress.com", () => {
    hide(document.querySelector(".custom-cookie-banner"))
})
hiders.set("wccftech.com", () => {
    hideQuantcast()
})
hiders.set("vimeo.com", () => {
    hide(document.querySelector(".gdpr_banner"))
})
hiders.set("uk.reuters.com", () => {
    hide(document.querySelector("#_evidon_banner"))
})
hiders.set("wiki.dd-wrt.com", () => {
    hide(document.querySelector(".cookieinfo"))
})
hiders.set("www.20min.ch", () => {
    hide(document.querySelector(".as-oil-content-overlay"))
})
hiders.set("www.6play.fr", () => {
    hide(document.querySelector(".banner--gdpr"))
})
hiders.set("www.atlasobscura.com", () => {
    hide(document.querySelector("#cookie-consent-modal"))
    hide(document.querySelector(".modal-backdrop"))
    document.querySelector("body").classList.remove("modal-open")
})
hiders.set("www.audi.fr", () => {
    hide(document.querySelector(".nm-cookiepolicy"))
})
hiders.set("www.backmarket.fr", () => {
    hide(document.querySelector(".banner.paper"))
})
hiders.set("www.bbc.com", () => {
    hide(document.querySelector("#cookiePrompt"))
})
hiders.set("www.bicycling.com", () => {
    hide(document.querySelector("#_evidon-barrier-wrapper"))
})
hiders.set("www.bing.com", () => {
    hide(document.querySelector("#thp_notf_div"))
})
hiders.set("www.biography.com", () => {
    hide(document.querySelector(".qc-cmp-ui-container.qc-cmp-showing"))
    document.querySelector("body").classList.remove("qc-cmp-ui-showing")
})
hiders.set("www.blackwake.com", () => {
    hide(document.querySelector("#kb-container"))
})
hiders.set("www.bleepingcomputer.com", () => {
    hideQuantcast()
})
hiders.set("www.bloomberg.com", () => {
    hide(document.querySelector("#paywall-banner"))
})
hiders.set("www.bmw.fr", () => {
    hide(document.querySelector(".ds2-cookie-disclaimer"))
})
hiders.set("www.buzzfeed.com", () => {
    hideQuantcast()
})
hiders.set("www.cbsnews.com", () => {
    hide(document.querySelector("#_evidon_banner"))
})
hiders.set("www.challenges.fr", () => {
    hideQuantcast()
})
hiders.set("www.citylab.com", () => {
    hideQuantcast()
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
    hide(document.querySelector("div[class^='CookieGdpr__cookie']"))
})
hiders.set("www.dealabs.com", () => {
    hide(document.querySelector(".softMessages-list"))
})
hiders.set("www.dejbox.fr", () => {
    hide(document.querySelector(".cookie_banner"))
})
hiders.set("www.esquire.com", () => {
    hide(document.querySelector("#_evidon-banner"))
})
hiders.set("www.eurogamer.net", () => {
    hide(document.querySelector(".bottom.cookie-bar.cookie-gdpr"))
})
hiders.set("www.facebook.com", () => {
    hide(document.querySelector(".fbPageBanner"))
})
hiders.set("www.foozine.com", () => {
    hideQuantcast()
})
hiders.set("www.francetvinfo.fr", () => {
    hide(document.querySelector("#cookie-cnil-box"))
})
hiders.set("www.funradio.fr", () => {
    hide(document.querySelector("#didomi-consent-popup"))
    document.querySelector("body").classList.remove("didomi-consent-popup-open")
})
hiders.set("www.gamekult.com", () => {
    hideQuantcast()
})
hiders.set("www.gamelove.com", () => {
    hide(document.querySelector("#sliding-popup"))
})
hiders.set("www.gibert.com", () => {
    hide(document.querySelector("#notice-cookie-block"))
})
hiders.set("www.gogalaxy.com", () => {
    hide(document.querySelector("#cookies"))
})
hiders.set("www.google.com", () => {
    hide(document.querySelector("#lb"))
    document.querySelector("html").style.overflow = 'scroll'
})
hiders.set("www.google.fr", () => {
    hide(document.querySelector(".fbar"))
})
hiders.set("www.independent.co.uk", () => {
    hideQuantcast()
})
hiders.set("www.infoconcert.com", () => {
    hide(document.querySelector("#notification-cookies"))
})
hiders.set("www.instagram.com", () => {
    hide(document.querySelector(".lOPC8"))
})
hiders.set("www.inverse.com", () => {
    hide(document.querySelector(".cc-window.cc-banner.cc-type-opt-out.cc-bottom "))
})
hiders.set("izismile.com", () => {
    hideQuantcast()
})
hiders.set("www.jamendo.com", () => {
    hide(document.querySelector("li.is-cookie-banner"))
})
hiders.set("www.jetbrains.com", () => {
    hide(document.querySelector(".cookies-banner__body"))
})
hiders.set("www.leetchi.com", () => {
    hide(document.querySelector("#AcceptCookiesBanner"))
})
hiders.set("www.lemonde.fr", () => {
    hide(document.querySelector("#cookie-banner"))
})
hiders.set("www.leprogres.fr", () => {
    hideQuantcast()
})
hiders.set("www.leroymerlin.fr", () => {
    hide(document.querySelector("#privacy_bandeau"))
})
hiders.set("www.lesnumeriques.com", () => {
    hideQuantcast()
})
hiders.set("www.linkedin.com", () => {
    hide(document.querySelector("#global-alert-queue"))
})
hiders.set("www.lycamobile.fr", () => {
    hide(document.querySelector(".cookie-notice-container"))
})
hiders.set("www.mercedes-benz.fr", () => {
    hide(document.querySelector("#cp-overlay"))
    hide(document.querySelector("#cp-dialog"))
})
hiders.set("www.microsoft.com", () => {
    hide(document.querySelector("#uhfCookieAlert"))
})
hiders.set("www.newsweek.com", () => {
    hide(document.querySelector("#didomi-host"))
    document.querySelector("body").classList.remove("didomi-popup-open")
})
hiders.set("www.nissan.fr", () => {
    hide(document.querySelector(".cookies-container"))
})
hiders.set("www.numerama.com", () => {
    hide(document.querySelector("body > iframe + div "))
})
hiders.set("www.nytimes.com", () => {
    hide(document.querySelector(".shown.expanded"))
})
hiders.set("www.paris.fr", () => {
    hide(document.querySelector("#notice_cnil"))
})
hiders.set("www.pcgamer.com", () => {
    hide(document.querySelector("#cmp-container-id"))
})
hiders.set("www.phoronix.com", () => {
    hideQuantcast()
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
    let parentDivs = document.querySelectorAll("#SHORTCUT_FOCUSABLE_DIV > div");
    for (const [i, div] of parentDivs.entries()) {
        if (div.firstChild && div.firstChild.firstChild.tagName.toUpperCase() == "FORM") {
            let form = div.firstChild.firstChild
            if (form.innerHTML.indexOf("Cookies") !== -1) {
                hide(div)
            }
        }
    }
})
hiders.set("www.rollingstone.com", () => {
    hideQuantcast()
})
hiders.set("www.reuters.com", () => {
    hide(document.querySelector("#_evidon_banner"))
})
hiders.set("www.r-m.de", () => {
    hide(document.querySelector(".privacy-container"))
})
hiders.set("www.siemens-home.bsh-group.com", () => {
    hide(document.querySelector(".o-cookielaw"))
})
hiders.set("www.sudinfo.be", () => {
    hide(document.querySelector("#cookiesdirective"))
})
hiders.set("www.tablaroliste.com", () => {
    hide(document.querySelector(".cookie-dialog"))
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
    hideQuantcast()
})
hiders.set("www.thedailybeast.com", () => {
    hide(document.querySelector("#optanon-popup-bg"))
    hide(document.querySelector(".optanon-alert-box-wrapper"))
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
    hideQuantcast()
})
hiders.set("www.vice.com", () => {
    hide(document.querySelector("#cmp-container-id"))
    hide(document.querySelector("div[class^='sp_message_container'"))
    hide(document.querySelector("div[class^='sp_veil'"))
    document.querySelector("body").style["overflow-y"] = "scroll"
})
hiders.set("www.vox.com", () => {
    hide(document.querySelector("#privacy-consent"))
})
hiders.set("www.whosampled.com", () => {
    hideQuantcast()
})
hiders.set("www.youtube.com", () => {
    hide(document.querySelector("#ticker"))
    hide(document.querySelector("iron-overlay-backdrop"))
    hide(document.querySelector("#consent-bump"))
    // TODO: make this work: window.document.getElementById("movie_player").playVideo()
})

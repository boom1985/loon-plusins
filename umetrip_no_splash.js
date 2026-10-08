var body = $response.body;
try {
    var o = JSON.parse(body);
    if (o.data) {
        o.data.splash = null;
        o.data.splashAd = null;
        o.data.launchAd = null;
        o.data.bootAd = null;
        o.data.ads = null;
        o.data.advert = null;
        o.data.popup = null;
        ["splashList","adList","adsList","launchList","popupList"].forEach(k=>{
            if (Array.isArray(o.data[k])) o.data[k] = [];
        });
    }
    $done({ body: JSON.stringify(o) });
} catch (e) {
    $done({});
}

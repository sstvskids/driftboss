// BETA!! THIS will HAVE issues

(function() {
    if (localStorage.getItem('mjs-drift-boss-dailyreward') === null) {
        alert('go collect some awards blud 😀')
        return;
    }
})();

const date = Date;
const oldstorage = localStorage.getItem('mjs-drift-boss-dailyreward');
const basestring = atob(oldstorage);
const data = basestring? JSON.parse(basestring): {};

for (let i = 1; i <= 9999; i++) {
    data.dayCount = i;
    data.lastCollectTime = date.now();
    localStorage.setItem('mjs-drift-boss-dailyreward', btoa(JSON.stringify(data)));
    window.location.reload();
}
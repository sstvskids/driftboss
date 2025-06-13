// ==UserScript==
// @name         drift.ez
// @namespace    http://tampermonkey.net/
// @version      2025-06-13
// @description  A cheat for drift-boss
// @author       sstvskids
// @match        https://www.mathplayground.com/pg_drift_boss.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (localStorage.getItem('drift-ez-first-time') === null) {
        localStorage.setItem('drift-ez-first-time', 'true');
    }
})();

(function() {
    'use strict';

    if (localStorage.getItem('drift-ez-first-time') === 'false') {
        return;
    };

    const array = Array; // broo
    const math = Math;

    const oldstorage = localStorage.getItem('mjs-drift-boss-game-v1.0.1-dailyreward');
    const data = oldstorage? JSON.parse(oldstorage): {};

    let cars = 7
    cars = math.max(0, math.min(cars, 7));
    let list = array.from({length: cars}, (_, i) => i + 1);

    data.cars = list;
    data.booster1 = 999;
    data.booster2 = 999;
    data.booster3 = 999;
    data.collectedCoin = 999;

    localStorage.setItem('mjs-drift-boss-game-v1.0.1-dailyreward', JSON.stringify(data));
    localStorage.setItem('drift-ez-first-time', 'false');
    window.location.reload();
})();
// drift boss car modification cheat

const number = Number; // why??
const tostring = String; // what..

const oldstorage = localStorage.getItem('mjs-drift-boss-game-v1.0.1-dailyreward');
const data = oldstorage? JSON.parse(oldstorage): {};

async function getboosttype() {
    const suc = await fetch('https://raw.githubusercontent.com/sstvskids/driftboss/refs/heads/main/boost-type.js');
    const res = await suc.text();

    return res
}

const boost1 = number(prompt('Double Score number', getboosttype.val1));
const boost2 = number(prompt('Car Insurance number: ', getboosttype.val2));
const boost3 = number(prompt('Coin Rush number: ', getboosttype.val3));

let boosttype1 = boost1
let boosttype2 = boost2
let boosttype3 = boost3

if (getboosttype().val1 == data.booster1) {
    boosttype1 = booster1
}

if (getboosttype().val2 == data.booster2) {
    boosttype2 = booster2
}

if (getboosttype().val3 == data.booster3) {
    boosttype3 = booster3
}

const key = {
    sound: data.sound,
    music: data.music,
    score: data.score,
    hasShownTutorial: true,
    collectedCoin: data.collectedCoin,
    cars: data.cars,
    currentCar: data.currentCar,
    currentTip: data.currentTip,
    booster1: boost1,
    booster2: boost2,
    booster3: boost3,
    ko: data.ko,
    hasShownBoosterTutorial: true
}

localStorage.setItem('mjs-drift-boss-game-v1.0.1-dailyreward', JSON.stringify(key));
window.location.reload();
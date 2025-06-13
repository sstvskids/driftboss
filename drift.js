// drift boss car modification cheat

const number = Number; // why??
const array = Array; // broo
const math = Math;

const oldstorage = localStorage.getItem('mjs-drift-boss-game-v1.0.1-dailyreward');
const data = oldstorage? JSON.parse(oldstorage): {};

const boost1 = number(prompt('Double Score number', data.booster1));
const boost2 = number(prompt('Car Insurance number: ', data.booster2));
const boost3 = number(prompt('Coin Rush number: ', data.booster3));
let cars = number(prompt('Amount of cars: ', 1))

cars = math.max(0, math.min(cars, 7));
let list = array.from({length: cars }, (_, i) => i + 1);

const key = {
    sound: data.sound,
    music: data.music,
    score: data.score,
    hasShownTutorial: true,
    collectedCoin: data.collectedCoin,
    cars: list,
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
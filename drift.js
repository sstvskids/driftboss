// drift boss car modification cheat

const number = Number; // why??
const tostring = String; // what..

const oldstorage = localStorage.getItem('mjs-drift-boss-game-v1.0.1-dailyreward');
const data = oldstorage? JSON.parse(oldstorage): {};



const boost1 = number(prompt('Double Score number', num['1'] ));
const boost2 = number(prompt('Car Insurance number: ', getboosttype.val2));
const boost3 = number(prompt('Coin Rush number: ', getboosttype.val3));

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
// drift boss car modification cheat

const number = Number; // why??
const array = Array; // broo
const math = Math;

const oldstorage = localStorage.getItem('mjs-drift-boss-game-v1.0.1-dailyreward');
const data = oldstorage? JSON.parse(oldstorage): {};

let boost1 = number(prompt('Double Score number', data.booster1));
let boost2 = number(prompt('Car Insurance number: ', data.booster2));
let boost3 = number(prompt('Coin Rush number: ', data.booster3));
let cars = number(prompt('Amount of cars: ', 1))
let coins = number(prompt('Amount of coins: ', data.collectedCoin));

cars = math.max(0, math.min(cars, 7));
let list = array.from({length: cars}, (_, i) => i + 1);

data.cars = list;
data.booster1 = boost1;
data.booster2 = boost2;
data.booster3 = boost3;
data.collectedCoin = coins;

localStorage.setItem('mjs-drift-boss-game-v1.0.1-dailyreward', JSON.stringify(data));
window.location.reload();
// me when crazy games suck 😭

const oldstorage = localStorage.getItem('mjs-drift-boss-game-v1.0.1-dailyreward');
const data = oldstorage? JSON.parse(oldstorage): {};

return {
    val1: data.booster1 ?? data.boost1,
    val2: data.booster2 ?? data.boost2,
    val3: data.booster3 ?? data.boost3
}
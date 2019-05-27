//draw x amount of cards to the hand
function draw(num) {
    for (i = 0; i < num; i++) {
        hand.push(deck[i]);
    }

    deck = deck.slice(num, deck.length);
}

//draw 6 cards to the prizes
function draw_prizes() {
    for (i = 0; i < 6; i++) {
        prizes.push(deck[i]);
    }

    deck = deck.slice(6, deck.length);
}

//calculates the odds of not having a basic pokemon in starting hand
function mulliganOdds() {

    var basic = 0;
    deck.forEach(function(entry) {
        if(entry.stage == "basic"){
            basic = basic + 1;
        }
    });

    var temp = 60 - basic;
    var top = temp * temp * temp * temp * temp * temp * temp;
    var bottom = 60 * 60 * 60 * 60 * 60 * 60 * 60;

    mulligan = Math.round((top/bottom) * 100) ;
}

//gets the chance of starting with a draw supporter
function drawsupporterOdds() {

    var supporter = 0;
    deck.forEach(function(entry) {
        if(entry.type == "supporter" && entry.action == "draw"){
            supporter = supporter + 1;
        }
    });

    var temp = 60 - supporter;
    var top = temp * temp * temp * temp * temp * temp * temp;
    var bottom = 60 * 60 * 60 * 60 * 60 * 60 * 60;

    drawsupporter = Math.round( (1 - (top/bottom)) * 100) ;
}

function searchitemOdds() {
    var item = 0;
    deck.forEach(function(entry) {
        if(entry.type == "item" && entry.action == "pokemon search"){
            item = item + 1;
        }
    });

    var temp = 60 - item;
    var top = temp * temp * temp * temp * temp * temp * temp;
    var bottom = 60 * 60 * 60 * 60 * 60 * 60 * 60;

    searchitem = Math.round( (1 - (top/bottom)) * 100) ;
}

function pokemonOdds() {
    var uniquepokes = findunique("pokemon");

    uniquepokes.forEach(function (entry) {
        pokemonstats = pokemonstats + entry +  " - " + pokemonMath(entry) + "%" + "<br />";
    });
}

function energyOdds() {
    var uniqueenergy = findunique("energy");

    uniqueenergy.forEach(function (entry) {
        energystats = energystats + entry +  " - " + pokemonMath(entry) + "%" + "<br />";
    });
}

function itemOdds() {
    var uniqueitems = findunique("item");

    uniqueitems.forEach(function (entry) {
        itemstats = itemstats + entry +  " - " + pokemonMath(entry) + "%" + "<br />";
    });
}

function supporterOdds() {
    var uniquesupporters = findunique("supporter");

    uniquesupporters.forEach(function (entry) {
        supporterstats = supporterstats + entry +  " - " + pokemonMath(entry) + "%" + "<br />";
    });
}

function stadiumOdds() {
    var uniquestadium = findunique("stadium");

    uniquestadium.forEach(function (entry) {
        stadiumstats = stadiumstats + entry +  " - " + pokemonMath(entry) + "%" + "<br />";
    });
}

function pokemonMath(p) {
    var num = 0;
    deck.forEach(function (entry) {
        if(entry.name == p){
            num = num + 1;
        }
    });

    var temp = 60 - num;
    var top = temp * temp * temp * temp * temp * temp * temp;
    var bottom = 60 * 60 * 60 * 60 * 60 * 60 * 60;

    return Math.round( (1 - (top/bottom)) * 100) ;
}

//gets the unique items from an array
function findunique(card) {
    var n = [];
    deck.forEach(function(entry) {
        if(entry.type == card){
            n.push(entry.name);
        }
    });

    return Array.from(new Set(n));
}

//reset
function reset() {
    impdeck();
    hand = [];
    prizes = [];
    mulligan = 0;
    drawsupporter = 0;
    searchitem = 0;
    pokemonstats = "";
    energystats = "";
    itemstats = "";
    supporterstats = "";
    stadiumstats = "";
}

//handles all the html
function display() {
    // document.getElementById("show_hand").innerText = hand;
    // document.getElementById("show_deck").innerHTML = deck;
    //document.getElementById("show_prizes").innerText = prizes;
    document.getElementById("show_mulligan").innerText = mulligan + "%";
    document.getElementById("show_drawsupporter").innerText = drawsupporter + "%";
    document.getElementById("show_searchitem").innerText = searchitem + "%";
    document.getElementById("show_pokemon").innerHTML = pokemonstats;
    document.getElementById("show_energy").innerHTML = energystats;
    document.getElementById("show_trainers").innerHTML = supporterstats + "<br/>" + itemstats + "<br/>" + stadiumstats;

    var temp1 = "";
    hand.forEach(function(entry) {
        temp1 = temp1 + (entry.name) + ", ";
    });
    document.getElementById("show_hand").innerHTML = temp1.substring(0, temp1.length - 2);

    var temp2 = "";
    deck.forEach(function(entry) {
        temp2 = temp2 + (entry.name) + ", ";
    });
    document.getElementById("show_deck").innerHTML = temp2.substring(0, temp2.length - 2);

    var temp3 = "";
    prizes.forEach(function(entry) {
        temp3 = temp3 + (entry.name) + ", ";
    });
    document.getElementById("show_prizes").innerHTML = temp3.substring(0, temp3.length - 2);

}

//shuffles the deck
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
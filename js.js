var deck = [];
var hand = [];
var prizes = [];

var mulligan = 0;
var drawsupporter = 0;
var searchitem = 0;

var pokemonstats = "";
var energystats = "";
var itemstats = "";
var supporterstats = "";
var stadiumstats = "";

$(document).ready(function() {

    //import deck
    impdeck();

    hand = [];
    prizes = [];

    //simulate starting hand
    $("#btnGo").click(function(){

        //get odds for each individual card
        pokemonOdds();
        energyOdds();
        supporterOdds();
        itemOdds();
        stadiumOdds();

        deck = shuffle(deck); //shuffle

        //starting hand odds
        mulliganOdds();
        drawsupporterOdds();
        searchitemOdds();

        draw(7); //draw hand
        draw_prizes(); //draw prizes

        display();

        document.getElementById("btnGo").disabled = true;
        document.getElementById("btnReset").disabled = false;
    });

    $("#btnReset").click(function(){

        reset();
        display();
        document.getElementById("btnGo").disabled = false;
        document.getElementById("btnReset").disabled = true;
    });

    $("#btnImport").click(function () {

        reset();
        display();
        document.getElementById("btnGo").disabled = false;
        document.getElementById("btnReset").disabled = true;
    })

    // $("#btnDrawOne").click(function(){
    //     deck = shuffle(deck);
    //     draw(1);
    //
    // });
});

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

var user_paste = [];
var import_array = ["SUM 101", "SUM 101", "SLG 55", "UNB 112", "UNB 112", "UNB 112", "UNB 112", "LOT 120", "LOT 120", "SLG 45", "UNB 76", "TEU 99", "TEU 99", "GRI 122", "CES 134", "CES 134", "GRI 130", "GRI 130", "CES 147", "CES 147", "SUM 123","SUM 123","SUM 123", "SUM 123", "UPR 119","UPR 119","UPR 119","UPR 119", "BUS 113", "UPR 122", "UPR 122", "GRI 125", "BUS 115", "BUS 115","BUS 115", "BUS 115", "TEU 134", "CIN 91", "SUM 135", "SUM 135", "SUM 135", "GRI 121", "UPR 125", "UPR 125", "UPR 125", "UPR 125", "LOT 167","CIN 93","CIN 93","CIN 93"];

var deck_object =[];

$(document).ready(function() {

    //import deck
    //impdeck();

    hand = [];
    prizes = [];

    //simulate starting hand
    $("#btnGo").click(function(){

        deck = shuffle(deck); //shuffle

        //get odds for each individual card
        pokemonOdds();
        energyOdds();
        supporterOdds();
        itemOdds();
        stadiumOdds();

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
        document.getElementById("btnReset").disabled = true;
    });

    $("#btnImport").click(function () {

        get_user_paste();

        hard_coded_deck();
        display();
        document.getElementById("btnGo").disabled = false;
        document.getElementById("btnReset").disabled = false;
    })

    // $("#btnDrawOne").click(function(){
    //     deck = shuffle(deck);
    //     draw(1);
    //
    // });
});


function parse_user_import() {
    alert(user_paste);

    // obj = user_paste.split(" ");
    // console.log(obj)


}

function search_db() {

    reset();

    import_array.forEach(function(element) {

        var temp = element.split(" ");
        get_ID(temp[0],temp[1])

    });


    console.log(deck_object);

}


function get_ID(setnum, number){

    if(setnum == "SUM"){
        search("sm1", number);
    }
    else if (setnum == "GRI"){
        search("sm2", number);
    }
    else if (setnum == "BUS"){
        search("sm3", number);
    }
    else if (setnum == "CIN"){
        search("sm4", number);
    }
    else if (setnum == "UPR"){
        search("sm5", number);
    }
    else if (setnum == "FLI"){
        search("sm6", number);
    }
    else if (setnum == "CES"){
        search("sm7", number);
    }
    else if (setnum == "LOT"){
        search("sm8", number);
    }
    else if (setnum == "TEU"){
        search("sm9", number);
    }
    else if (setnum == "UNB"){
        search("sm10", number);
    }
    else if (setnum == "SLG"){
        search("sm35", number);
    }
    else if (setnum == "DRM"){
        search("sm75", number);
    }
}

function search(set, num) {

    var id = set + "-" + num;

    var requestURL = 'https://notmichaelsgithub.github.io/shuffler/en_US/' + set + '.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();


    request.onload = function() {
        var setList = request.response;
        //console.log(setList);

        for (var x = 0; x < setList.length; x++) {

            if (setList[x].id == id){
                deck_object.push(setList[x])
            }

        }

    }


}


// function impDeck() {
//     deck = ["Silver back monkey", "Murkrow", "Murkrow", "Murkrow", "Murkrow", "Honchkrow", "Honchkrow", "Honchkrow", "Honchkrow", "Sneasel", "Sneasel", "Sneasel", "Weavile - RoE", "Weavile - RoE", "Weavile - EA", "Tapu Koko", "Tapu Koko", "Tapu Koko", "Tapu Koko",
//         "Energy Loto", "Nest Ball", "Nest Ball", "Nest Ball", "Rescue Stretcher", "Rescue Stretcher", "Ultra Ball", "Ultra Ball", "Ultra Ball", "Ultra Ball", "Choice Band", "Choice Band", "Choice Band", "Shrine of Punishment", "Shrine of Punishment", "Shrine of Punishment",
//         "Cynthia", "Cynthia", "Cynthia", "Cynthia", "Guzma", "Guzma", "Guzma", "Judge", "Lillie", "Lillie", "Lillie", "Lillie", "Tate & Liza", "Tate & Liza", "Tate & Liza",
//         "Coutner Energy", "Coutner Energy", "Coutner Energy", "Coutner Energy", "Double Colorless Energy", "Double Colorless Energy", "Double Colorless Energy", "Double Colorless Energy", "Dark Energy", "Dark Energy"
//     ];
// }

function get_user_paste() {
    search_db();
}


function hard_coded_deck() {

    deck = [
        {
            name: "Oranguru",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Murkrow",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Murkrow",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Murkrow",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Murkrow",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Honchkrow",
            type: "pokemon",
            stage: "stage 1"
        },
        {
            name: "Honchkrow",
            type: "pokemon",
            stage: "stage 1"
        },
        {
            name: "Honchkrow",
            type: "pokemon",
            stage: "stage 1"
        },
        {
            name: "Honchkrow",
            type: "pokemon",
            stage: "stage 1"
        },
        {
            name: "Sneasel",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Sneasel",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Sneasel",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Weavile-ROE",
            type: "pokemon",
            stage: "stage 1"
        },
        {
            name: "Weavile-ROE",
            type: "pokemon",
            stage: "stage 1"
        },
        {
            name: "Weavile-EA",
            type: "pokemon",
            stage: "stage 1"
        },
        {
            name: "Tapu Koko",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Tapu Koko",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Tapu Koko",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Tapu Koko",
            type: "pokemon",
            stage: "basic"
        },
        {
            name: "Energy Loto",
            type: "item"
        },
        {
            name: "Nest Ball",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Nest Ball",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Nest Ball",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Rescue Stretcher",
            type: "item"
        },
        {
            name: "Rescue Stretcher",
            type: "item"
        },
        {
            name: "Ultra Ball",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Ultra Ball",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Ultra Ball",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Ultra Ball",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Choice Band",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Choice Band",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Choice Band",
            type: "item",
            action: "pokemon search"
        },
        {
            name: "Shrine of Punishment",
            type: "stadium"
        },
        {
            name: "Shrine of Punishment",
            type: "stadium"
        },
        {
            name: "Shrine of Punishment",
            type: "stadium"
        },
        {
            name: "Cynthia",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Cynthia",
            type: "supporter",
            action: "draw"

        },
        {
            name: "Cynthia",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Cynthia",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Guzma",
            type: "supporter",
            action: "switch"
        },
        {
            name: "Guzma",
            type: "supporter",
            action: "switch"
        },
        {
            name: "Guzma",
            type: "supporter",
            action: "switch"
        },
        {
            name: "Judge",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Lillie",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Lillie",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Lillie",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Lillie",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Tate & Liza",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Tate & Liza",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Tate & Liza",
            type: "supporter",
            action: "draw"
        },
        {
            name: "Counter Energy",
            type: "energy"
        },
        {
            name: "Counter Energy",
            type: "energy"
        },
        {
            name: "Counter Energy",
            type: "energy"
        },
        {
            name: "Counter Energy",
            type: "energy"
        },
        {
            name: "Double Colorless Energy",
            type: "energy"
        },
        {
            name: "Double Colorless Energy",
            type: "energy"
        },
        {
            name: "Double Colorless Energy",
            type: "energy"
        },
        {
            name: "Double Colorless Energy",
            type: "energy"
        },
        {
            name: "Dark Energy",
            type: "energy"
        },
        {
            name: "Dark Energy",
            type: "energy"
        },

    ];
}



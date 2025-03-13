'use strict'
const fs = require('fs');

const colors = {
    royal_blue: "#4169E1",
    crimson_red: "#DC143C",
    emerald_green: "#50C878",
    golden_yellow: "#FFD700",
    deep_purple: "#800080"
};




let outputFile = "preferences.info"

if(fs.existsSync(outputFile)){
    console.log("Deleting old preferences.info...")
    fs.unlinkSync(outputFile)
}

// Creates the file named preferences.info
console.log("Creating a new preferences.info...")
fs.writeFileSync(outputFile, JSON.stringify(colors))







const midtermTopics = {
    HTML: "Semantic Tags",
    CSS: "Flexbox",
    JavaScript: "Objects/Arrays"
};

fs.appendFileSync('preferences.info', '\n' + JSON.stringify(midtermTopics));

const consolidated = {};

for (const key in colors){
    consolidated[key] = colors[key]
}

for (const key in midtermTopics){
    consolidated[key] = midtermTopics[key]
}


// Easier version of consolidating two objects into one
// const consolidated = {...colors, ...midtermTopics}

fs.appendFileSync('preferences.info', '\n\n' +JSON.stringify(consolidated));


const fileData = fs.readFileSync('preferences.info', {encoding: 'utf8'});
console.log(fileData)


/**
 * Consolidated Object should like this:
 * {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00",
  purple: "#800080",
  HTML: "Semantic Tags",
  CSS: "Flexbox",
  JavaScript: "Loops"
}
 * 
 */
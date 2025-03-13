const fs = require("fs");

const textFile = "log.txt"
const textContent = "Log File Opened: " + new Date().toString() + "\n"


if(!fs.existsSync(textFile)){
    console.log("File does not exists! \n Creating a txt file called log.txt...")
    console.log("File created called: " + textFile)
    fs.writeFileSync(textFile, "Log File Created: " + new Date().toString() + "\n", {encoding: "utf-8"})
}


try {
  fs.appendFileSync(textFile, textContent, {encoding: "utf-8", flag: 'a'});
  console.log("File was opened and new log entry added!");
} catch (err) {
  console.log("No such file exists!", err)
}


console.log("Current Log File Content:\n", fs.readFileSync(textFile, { encoding: "utf-8" }))

/**
 * 
    What happens when you use "w" vs "a" mode while writing to a file?
        w mode would overwrite the file while the a mode would only append to the 
        existing file

    Why is "utf-8" the most commonly used encoding?
        compatability and wide support

    How would you handle file writing errors in a real-world application?
        For example, a save file is a way of file writing. I would most likely make sure if
        a save file exists already and if it does then we just append/overwrite the save file
        if not then we create a new one.

        Typically, save files are common on RPG games, so a prompt of choosing which save file 
        to write to/a choice to create a new one would be ideal to.

        I'd guess IRL scenarios would include steps like:
        Make sure file does exists if not then create one
        Make sure when overwriting the file it is the same one targeted and not something else
        Would most likely be using some sort of backup

 */
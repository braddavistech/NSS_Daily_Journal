const API = require("./data")
const GRABAPI = require("./printSearch")


const RECORD = {
  recordEntry() {
    let curseWords = false
    let camelWords = document.querySelector("#conceptsCovered").value + " " + document.querySelector("#journalEntryText").value;
    let wordString = camelWords.toLowerCase();
    let wordArray = wordString.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === "fuck" || wordArray[i] === "shit" || wordArray[i] === "ass" || wordArray[i] === "bitch") {
        curseWords = true;
        return alert("You can't curse in this journal. Let's keep it clean.");
      }
    };
    if (curseWords === false) {
      if (document.querySelector("#journalDate").value === "" || document.querySelector("#conceptsCovered").value === "" || document.querySelector("#journalEntryText").value === "") {
        alert("All fields must be filled out to record journal entry.");
      } else if (document.querySelector("#conceptsCovered").value.length > 40) {
        alert("The maximum amount of characters to record in the concept section is 40.")
      } else {
        function printEntries() { };
        printEntries.prototype = {};
        let temp = Object.create(printEntries);
        temp.journalDate = document.querySelector("#journalDate").value;
        document.querySelector("#journalDate").value = "";
        temp.journalConcept = document.querySelector("#conceptsCovered").value;
        document.querySelector("#conceptsCovered").value = "";
        temp.journalMessage = document.querySelector("#journalEntryText").value;
        document.querySelector("#journalEntryText").value = "";
        temp.journalMood = document.querySelector("#dailyMood").value;
        document.querySelector("#dailyMood").value = 1;
        temp.journalInstructor = document.querySelector("#dailyInstructor").value;
        document.querySelector("#dailyInstructor").value = 1;
        joinTableTag = [];
        let tagRadio = document.querySelectorAll(".tagBox");
        tagRadio.forEach(radio => {
          if (radio.checked === true) {
            console.log(radio);
            joinTableTag.push(Number(radio.value));
            radio.checked = false;
          }
        })
        API.saveJournalEntries(temp, joinTableTag).then(entries => GRABAPI.printSearch(entries));
      };
    }
  }
};

module.exports = RECORD
const journalEntries = [];
let tempEntry = [];

const oldPosts = (message => {
  function printEntries () {};
  printEntries.prototype = {};
  
  for (let i = 0; i < message.length; i++){
    let temp = Object.create(printEntries);
    temp = message[i];
    DOM.renderJournalEntries(temp);
  };
});

const RECORD = {
  recordEntry () {
    let curseWords = false
    let camelWords = document.querySelector("#conceptsCovered").value + " " + document.querySelector("#journalEntryText").value;
    let wordString = camelWords.toLowerCase();
    let wordArray = wordString.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        console.log(wordArray[i]);
      if (wordArray[i] == "fuck" || wordArray[i] == "shit" || wordArray[i] == "ass" || wordArray[i] == "bitch"){
        curseWords = true;
        return alert("You can't curse in this journal. Let's keep it clean.");
      }
    };
    if (curseWords == false) {
      if (document.querySelector("#journalDate").value == "" || document.querySelector("#conceptsCovered").value == "" || document.querySelector("#journalEntryText").value == "") {
        alert("All fields must be filled out to record journal entry.");
      } else if (document.querySelector("#conceptsCovered").value.length > 40) {
        alert("The maximum amount of characters to record in the concept section is 40.")
      } else {
      function printEntries () {};
      printEntries.prototype = {};
      let temp = Object.create(printEntries);
      temp.journalDate = document.querySelector("#journalDate").value;
      temp.journalConcept = document.querySelector("#conceptsCovered").value;
      temp.journalMessage = document.querySelector("#journalEntryText").value;
      temp.journalMood = document.querySelector("#dailyMood").value;
      console.log(temp)
      API.saveJournalEntries(temp);
      DOM.renderJournalEntries(temp);
      console.log(temp);
      };
    };
  }
};







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
    if (document.querySelector("#journalDate").value == "" || document.querySelector("#conceptsCovered").value == "" || document.querySelector("#journalEntryText").value == "") {
      alert("All fields must be filled out to record journal entry.");
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
  }
};




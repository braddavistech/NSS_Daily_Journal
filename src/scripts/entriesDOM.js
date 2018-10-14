const journalEntries = [];
let tempEntry = [];

const oldPosts = (message => {
  function printEntries () {};
  printEntries.prototype = {};
  
  for (let i = 0; i < message.length; i++){
    let temp = Object.create(printEntries);
    temp = message[i];
    renderJournalEntries(temp);
  };
});

document.getElementById("recordEntry").addEventListener("click", recordEntry);


function recordEntry () {
  function printEntries () {};
  printEntries.prototype = {};
  let temp = Object.create(printEntries);
  temp.journalDate = document.getElementById("journalDate").value;
  temp.journalConcept = document.getElementById("conceptsCovered").value;
  temp.journalMessage = document.getElementById("journalEntryText").value;
  temp.journalMood = document.getElementById("dailyMood").value;
  renderJournalEntries(temp);
  console.log(temp);
}
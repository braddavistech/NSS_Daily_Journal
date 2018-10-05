const journalEntries = [];
let tempEntry = [];

document.getElementById("recordEntry").addEventListener("click", recordEntry);

function recordEntry () {
  var entryDate = document.getElementById("journalDate").value;
  var entryConcept = document.getElementById("conceptsCovered").value;
  var entryMessage = document.getElementById("journalEntryText").value;
  var entryMood = document.getElementById("dailyMood").value;
  tempEntry = {
    journalDate : entryDate,
    journalConcept : entryConcept,
    journalMessage : entryMessage,
    journalMood : entryMood
  };
  journalEntries.push(tempEntry);
  console.log(journalEntries);
}
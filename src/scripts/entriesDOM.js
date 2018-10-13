const journalEntries = [];
let tempEntry = [];

const oldPosts = (message => {
  for (let i = 0; i < message.length; i++){
    tempEntry = {
      journalDate : message[i].journalDate,
      journalConcept : message[i].journalConcept,
      journalMessage : message[i].journalMessage,
      journalMood : message[i].journalMood
    };
    journalEntries.push(tempEntry);
  };
  renderJournalEntries(journalEntries);
});

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
  renderJournalEntries(journalEntries);
}
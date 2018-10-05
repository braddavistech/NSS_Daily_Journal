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
  renderJournalEntries();
}

function renderJournalEntries () {
  document.getElementById("journalPrintPlaceholder").innerHTML = "";
  for (let i = 0; i < journalEntries.length; i++){
    let journalEntryBlock = document.createElement("div");
    journalEntryBlock.id="journalEntryPrint";
    let journalElementDate = document.createElement("p");
    let journalNodeDate = document.createTextNode(journalEntries[i].journalDate);
    journalElementDate.appendChild(journalNodeDate);
    journalEntryBlock.appendChild(journalElementDate);
    let journalElementConcept = document.createElement("p");
    let journalNodeConcept = document.createTextNode(journalEntries[i].journalConcept);
    journalElementConcept.appendChild(journalNodeConcept);
    journalEntryBlock.appendChild(journalElementConcept);
    let journalElementMessage = document.createElement("p");
    let journalNodeMessage = document.createTextNode(journalEntries[i].journalMessage);
    journalElementMessage.appendChild(journalNodeMessage);
    journalEntryBlock.appendChild(journalElementMessage);
    let journalElementMood = document.createElement("p");
    let journalNodeMood = document.createTextNode(journalEntries[i].journalMood);
    journalElementMood.appendChild(journalNodeMood);
    journalEntryBlock.appendChild(journalElementMood);
    document.getElementById("journalPrintPlaceholder").appendChild(journalEntryBlock);
  };
};
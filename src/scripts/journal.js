const journalEntries = [];
const moodText = "";
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
    let journalNodeMoodValue = journalEntries[i].journalMood;
    journalNodeMood = dailyMood(journalNodeMoodValue);
    journalElementMood.innerHTML=journalNodeMood;    
    journalEntryBlock.appendChild(journalElementMood);
    document.getElementById("journalPrintPlaceholder").appendChild(journalEntryBlock);
  };
};

function dailyMood (journalNodeMoodValue) {
  let journalNodeMood;
  
  if (journalNodeMoodValue == "1"){
        journalNodeMood = "Optimistic";
    } else if (journalNodeMoodValue ==  "2"){
        journalNodeMood = "Happy";
    } else if (journalNodeMoodValue ==  "3"){
        journalNodeMood = "Excited";
    } else if (journalNodeMoodValue == "4"){
        journalNodeMood = "Tired";
    } else if (journalNodeMoodValue == "5"){
        journalNodeMood = "Anxious";
    } else if (journalNodeMoodValue == "6"){
        journalNodeMood = "Stressed";
    } else if (journalNodeMoodValue == "7"){
        journalNodeMood = "Sad";
    };
  
  console.log(journalNodeMoodValue);
  console.log(journalNodeMood)


  return journalNodeMood;
};
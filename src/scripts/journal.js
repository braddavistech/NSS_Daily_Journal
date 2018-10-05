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
    journalEntryBlock.className="journalEntryPrint";
    let journalElementDate = document.createElement("p");
    let journalNodeDate = document.createTextNode("Date: " + journalEntries[i].journalDate);
    journalElementDate.appendChild(journalNodeDate);
    journalEntryBlock.appendChild(journalElementDate);
    let journalElementConcept = document.createElement("p");
    let journalNodeConcept = document.createTextNode("Concepts Covered: " + journalEntries[i].journalConcept);
    journalElementConcept.appendChild(journalNodeConcept);
    journalEntryBlock.appendChild(journalElementConcept);
    let journalElementMessage = document.createElement("p");
    let journalNodeMessage = document.createTextNode("Thoughts/Notes: " + journalEntries[i].journalMessage);
    journalElementMessage.appendChild(journalNodeMessage);
    journalEntryBlock.appendChild(journalElementMessage);
    let journalElementMood = document.createElement("p");
    let journalNodeMoodValue = journalEntries[i].journalMood;
    journalNodeMood = dailyMood(journalNodeMoodValue, journalEntryBlock);
    journalElementMood.innerHTML=journalNodeMood;    
    journalEntryBlock.appendChild(journalElementMood);
    document.getElementById("journalPrintPlaceholder").appendChild(journalEntryBlock);
  };
};

function dailyMood (journalNodeMoodValue, journalEntryBlock) {
  let journalNodeMood;
  
  if (journalNodeMoodValue == "1"){
        journalNodeMood = "General Mood: Optimistic";
        journalEntryBlock.id="optimisticJournalEntry";
    } else if (journalNodeMoodValue ==  "2"){
        journalNodeMood = "General Mood: Happy";
        journalEntryBlock.id="happyJournalEntry";
    } else if (journalNodeMoodValue ==  "3"){
        journalNodeMood = "General Mood: Excited";
        journalEntryBlock.id="excitedJournalEntry";
    } else if (journalNodeMoodValue == "4"){
        journalNodeMood = "General Mood: Tired";
        journalEntryBlock.id="tiredJournalEntry";
    } else if (journalNodeMoodValue == "5"){
        journalNodeMood = "General Mood: Anxious";
        journalEntryBlock.id="anxiousJournalEntry";
    } else if (journalNodeMoodValue == "6"){
        journalNodeMood = "General Mood: Stressed";
        journalEntryBlock.id="stressedJournalEntry";
    } else if (journalNodeMoodValue == "7"){
        journalNodeMood = "General Mood: Sad";
        journalEntryBlock.id="sadJournalEntry";
    };

  return journalEntryBlock, journalNodeMood;
};
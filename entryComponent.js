const DOM = {
    renderJournalEntries (temp) {
      let journalEntryBlock = document.createElement("div");
      journalEntryBlock.className="journalEntryPrint";
      let journalElementDate = document.createElement("p");
      let journalNodeDate = document.createTextNode("Date: " + temp.journalDate);
      journalElementDate.appendChild(journalNodeDate);
      journalEntryBlock.appendChild(journalElementDate);
      let journalElementConcept = document.createElement("p");
      let journalNodeConcept = document.createTextNode("Concepts Covered: " + temp.journalConcept);
      journalElementConcept.appendChild(journalNodeConcept);
      journalEntryBlock.appendChild(journalElementConcept);
      let journalElementMessage = document.createElement("p");
      let journalNodeMessage = document.createTextNode("Thoughts/Notes: " + temp.journalMessage);
      journalElementMessage.appendChild(journalNodeMessage);
      journalEntryBlock.appendChild(journalElementMessage);
      let journalElementMood = document.createElement("p");
      let journalNodeMoodValue = temp.journalMood;
      journalNodeMood = DOM.dailyMood(journalNodeMoodValue, journalEntryBlock);
      journalElementMood.innerHTML = journalNodeMood;    
      journalEntryBlock.appendChild(journalElementMood);
      document.getElementById("journalPrintPlaceholder").appendChild(journalEntryBlock);
    },
    dailyMood (journalNodeMoodValue, journalEntryBlock) {
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
    }
  };
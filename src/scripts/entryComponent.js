const inputFields = [
  {
    labelFor: "journalDate",
    labelText: "Date of Entry",
    inputType: "date"
  },
  {
    labelFor: "conceptsCovered",
    labelText: "Concepts Covered",
    inputType: "text",
    inputPlaceholder: "Enter Concepts Here (Max of 40 Character)"
  },
  {
    labelFor: "journalEntryText",
    labelText: "Journal Entry",
    inputType: "text",
    inputPlaceholder: "Enter Journal Entry Here"
  },
  {
    labelFor: "dailyMood",
    labelText: "Mood for the Day",
    inputType: "select",
    optionValue: ["Optimistic", "Happy", "Excited", "Tired", "Anxious", "Stressed", "Sad"],
  },
  {  
    labelFor: "recordEntry",
    labelText: "SAVE JOURNAL ENTRY",
    inputType: "button"
  }
];

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
    },
    insertForm (){
      let domHolder = document.querySelector("#blockForm");
      let titleBlock = document.createElement("h1");
      titleBlock.setAttribute("id", "journalTitle");
      titleBlock.innerHTML = "Daily Journal";
      domHolder.appendChild(titleBlock);
      let formBox = document.createElement("form");
      formBox.setAttribute("id", "journalForm"); 
      for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].inputType != "select" && inputFields[i].inputType != "button"){
          let field = document.createElement("fieldset");
          let labelElem = document.createElement("label");
          labelElem.setAttribute("for", inputFields[i].labelFor);
          labelElem.setAttribute("class", "labelName");
          labelElem.innerHTML = inputFields[i].labelText;
          field.appendChild(labelElem);
          let inputElem = document.createElement("input");
          inputElem.setAttribute("type", inputFields[i].inputType);
          inputElem.setAttribute("class", "inputBox");
          inputElem.setAttribute("name", inputFields[i].labelFor);
          inputElem.setAttribute("id", inputFields[i].labelFor);
          inputElem.setAttribute("placeholder", inputFields[i].inputPlaceholder);
          field.appendChild(inputElem);
          formBox.appendChild(field);
        } else if (inputFields[i].inputType == "select") {
          let field = document.createElement("fieldset");
          let labelElem = document.createElement("label");
          labelElem.setAttribute("for", inputFields[i].labelFor);
          labelElem.setAttribute("class", "labelName");
          labelElem.createTextNode = inputFields[i].labelText;
          field.appendChild(labelElem);
          let inputElem = document.createElement("select");
          inputElem.setAttribute("class", "inputBox");
          inputElem.setAttribute("name", inputFields[i].labelFor);
          inputElem.setAttribute("id", inputFields[i].labelFor);
          for(let x = 1; x <= inputFields[i].optionValue.length; x++) {
            let optionElem = document.createElement("option");
            optionElem.setAttribute("value", x);
            optionElem.innerHTML = inputFields[i].optionValue[x-1];
            inputElem.appendChild(optionElem);
          } 
          field.appendChild(inputElem);
          formBox.appendChild(field);
        } else if (inputFields[i].inputType == "button") {
          let buttonElem = document.createElement("input");
          buttonElem.setAttribute("type", inputFields[i].inputType);
          buttonElem.setAttribute("id", inputFields[i].labelFor);
          buttonElem.setAttribute("value", inputFields[i].labelText);
          formBox.appendChild(buttonElem);
        } 
      };
      domHolder.appendChild(formBox);
    }
};
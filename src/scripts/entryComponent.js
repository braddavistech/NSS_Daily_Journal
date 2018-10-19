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
  },
  {
    labelFor: "moodButtonBox",
    labelText: "FILTER ENTRIES BY MOOD",
    labelButton: "radio",
    indivButtons: [
      {
        labelFor: "allMood",
        labelText: "SEE ALL",
        inputType: "radio",
        inputId: "all",
        inputValue: "all"
      },
      {
        labelFor: "optMood",
        labelText: "OPTIMISTIC",
        inputType: "radio",
        inputId: "opt",
        inputValue: "opt"
      },
      {
        labelFor: "hapMood",
        labelText: "HAPPY",
        inputType: "radio",
        inputId: "hap",
        inputValue: "hap"
      },
      {
        labelFor: "excMood",
        labelText: "EXCITED",
        inputType: "radio",
        inputId: "exc",
        inputValue: "exc"
      },
      {
        labelFor: "tirMood",
        labelText: "TIRED",
        inputType: "radio",
        inputId: "tir",
        inputValue: "tir"
      },
      {
        labelFor: "anxMood",
        labelText: "ANXIOUS",
        inputType: "radio",
        inputId: "anx",
        inputValue: "anx"
      },
      {
        labelFor: "strMood",
        labelText: "STRESSED",
        inputType: "radio",
        inputId: "str",
        inputValue: "str"
      },
      {
        labelFor: "sadMood",
        labelText: "SAD",
        inputType: "radio",
        inputId: "sad",
        inputValue: "sad"
      },
      {
        labelFor: "filterJournal",
        labelText: "FILTER JOURNAL",
        inputType: "button"
      }
    ]
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
      console.log(journalEntryBlock);
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
        if (inputFields[i].inputType != "select" && inputFields[i].inputType != "button" && inputFields[i].labelButton != "radio"){
          let field = document.createElement("fieldset");
          field.setAttribute("class", "normalInput");
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
          field.setAttribute("class", "normalInput");
          let labelElem = document.createElement("label");
          labelElem.setAttribute("for", inputFields[i].labelFor);
          labelElem.setAttribute("class", "labelName");
          labelElem.createTextNode = inputFields[i].labelText;
          field.appendChild(labelElem);
          let inputElem = document.createElement("select");
          inputElem.setAttribute("class", "selectBox");
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
        } else if (inputFields[i].labelButton == "radio") {
          console.log("in");
          let field = document.createElement("fieldset");
          field.setAttribute("id", "entireRadio");
          let labelElem = document.createElement("label");
          labelElem.setAttribute("for", inputFields[i].labelFor);
          labelElem.setAttribute("class", "buttonBoxName");
          labelElem.innerHTML = inputFields[i].labelText;
          field.appendChild(labelElem);
          for (let x = 0; x < inputFields[i].indivButtons.length; x++) {
            if (inputFields[i].indivButtons[x].labelFor == "filterJournal"){
              let buttonElem = document.createElement("input");
              buttonElem.setAttribute("type", inputFields[i].indivButtons[x].inputType);
              buttonElem.setAttribute("id", inputFields[i].indivButtons[x].labelFor);
              buttonElem.setAttribute("value", inputFields[i].indivButtons[x].labelText);
              field.appendChild(buttonElem);
            } else {
              labelBox = document.createElement("section");
              labelBox.setAttribute("class", "indivBox");
              labelElem = document.createElement("label");
              labelElem.setAttribute("for", inputFields[i].indivButtons[x].labelFor);
              labelElem.setAttribute("class", "radioName");
              labelElem.innerHTML = inputFields[i].indivButtons[x].labelText;
              labelBox.appendChild(labelElem);
              let inputElem = document.createElement("input");
              inputElem.setAttribute("type", "radio");
              // TODO:Need to create a function findMatched() that gets entries through API and sorts them by changed radios.
              inputElem.setAttribute("onclick", "ClearRd(this)");
              // TODO:Also need to set up all function.
              inputElem.setAttribute("class", "radioBox");
              inputElem.setAttribute("name", inputFields[i].indivButtons[x].labelFor);
              inputElem.setAttribute("id", inputFields[i].indivButtons[x].labelFor);
              labelBox.appendChild(inputElem);
              field.appendChild(labelBox);
            }
          }
          formBox.appendChild(field);
          console.log(field);
        }
      };
      domHolder.appendChild(formBox);
    }
};

var checkedRadio;
function ClearRd(o)
{
  console.log(checkedRadio);
   if (checkedRadio == o)
   { 
      o.checked = false;
      checkedRadio = null;
   } else {
     checkedRadio = o;
   }
}
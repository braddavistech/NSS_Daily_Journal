(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const DOM = require("./entryComponent")

const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries")
      .then(entries => entries.json())
  },

  saveJournalEntries(temp) {
    return fetch('http://localhost:8088/entries', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(temp)
    })
    .then(contacts => contacts.json())
    .then(() => API.getJournalEntries())
  },

  findMatches() {
    return fetch("http://localhost:8088/entries")
      .then(entries => entries.json())
      .then(entries => {
        let moods = [];
        let sortList = [];
        let moodElements = $(".indivBox");
        for (let i = 0; i < moodElements.length; i++) {
          let selected = moodElements[i].children[1].checked;
          if (selected === true) {
            let moodValue = i;
            if (moodValue === 0) {
              for (let i = 0; i < moodElements.length; i++) {
                let tempNum = i;
                let allNumber = tempNum.toString();
                moods.push(allNumber);
              }
            } else {
              let tempString = moodValue.toString();
              moods.push(tempString)
            }
          }
        }
        entries.filter(entry => {
          let tempValue = entry.journalMood;
          if (moods.indexOf(tempValue) != -1) {
            sortList.push(entry);
          }
        })
        DOM.renderJournalEntries(sortList);
      })
  }
}

module.exports = API
},{"./entryComponent":3}],2:[function(require,module,exports){
const DOM = require("./entryComponent")
const API = require("./data")


const RECORD = {
  recordEntry() {
    console.log(DOM.renderJounrnalEntries);
    let curseWords = false
    let camelWords = document.querySelector("#conceptsCovered").value + " " + document.querySelector("#journalEntryText").value;
    let wordString = camelWords.toLowerCase();
    let wordArray = wordString.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === "fuck" || wordArray[i] === "shit" || wordArray[i] === "ass" || wordArray[i] === "bitch") {
        curseWords = true;
        return alert("You can't curse in this journal. Let's keep it clean.");
      }
    };
    if (curseWords === false) {
      if (document.querySelector("#journalDate").value === "" || document.querySelector("#conceptsCovered").value === "" || document.querySelector("#journalEntryText").value === "") {
        alert("All fields must be filled out to record journal entry.");
      } else if (document.querySelector("#conceptsCovered").value.length > 40) {
        alert("The maximum amount of characters to record in the concept section is 40.")
      } else {
        function printEntries() { };
        printEntries.prototype = {};
        let temp = Object.create(printEntries);
        temp.journalDate = document.querySelector("#journalDate").value;
        temp.journalConcept = document.querySelector("#conceptsCovered").value;
        temp.journalMessage = document.querySelector("#journalEntryText").value;
        temp.journalMood = document.querySelector("#dailyMood").value;
        API.saveJournalEntries(temp).then(entries => DOM.renderJournalEntries(entries));
      };
    }
  }
};

module.exports = RECORD
},{"./data":1,"./entryComponent":3}],3:[function(require,module,exports){
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
    labelFor: "buttonBoxName",
    labelText: "FILTER ENTRIES BY MOOD",
    inputType: "radio",
    labelButton: "radio",
    indivButtons: [
      {
        labelFor: "allMood",
        labelText: "SEE ALL",
      },
      {
        labelFor: "optMood",
        labelText: "OPTIMISTIC",
      },
      {
        labelFor: "hapMood",
        labelText: "HAPPY",
      },
      {
        labelFor: "excMood",
        labelText: "EXCITED",
      },
      {
        labelFor: "tirMood",
        labelText: "TIRED",
      },
      {
        labelFor: "anxMood",
        labelText: "ANXIOUS",
      },
      {
        labelFor: "strMood",
        labelText: "STRESSED",
      },
      {
        labelFor: "sadMood",
        labelText: "SAD",
      },
      {
        labelFor: "clearMood",
        labelText: "RESET",
      }
    ]
  }
];

const DOM = {
  renderJournalEntries(temp) {
    console.log(DOM);
    let journalEntryBlock = "";
    temp.forEach(temp => {
      let moodPrint = DOM.dailyMood(temp.journalMood);
      journalEntryBlock += `
        <div class="journalEntryPrint">
          <p>Date: ${temp.journalDate}</p>
          <p>Concepts Covered: ${temp.journalConcept}</p>
          <p>Thoughts/Notes: ${temp.journalMessage}</p>
          <p>${moodPrint}</p>
        </div>`
    })
    $("#journalPrintPlaceholder").html(journalEntryBlock);
  },
  dailyMood(journalNodeMoodValue) {
    let journalNodeMood = "";
    if (journalNodeMoodValue === "1") {
      journalNodeMood= "General Mood: Optimistic";
    } else if (journalNodeMoodValue === "2") {
      journalNodeMood = "General Mood: Happy";
    } else if (journalNodeMoodValue === "3") {
      journalNodeMood = "General Mood: Excited";
    } else if (journalNodeMoodValue === "4") {
      journalNodeMood = "General Mood: Tired";
    } else if (journalNodeMoodValue === "5") {
      journalNodeMood = "General Mood: Anxious";
    } else if (journalNodeMoodValue === "6") {
      journalNodeMood = "General Mood: Stressed";
    } else if (journalNodeMoodValue === "7") {
      journalNodeMood = "General Mood: Sad";
    };
    return journalNodeMood;
  },
  insertForm() {
    let formContent = `
      <h1 id="journalTitle">DAILY JOURNAL</h1>
      <form id="journalForm">`;
    inputFields.forEach(temp => {
      switch (temp.inputType) {
        case "date":
          formContent += `
            <fieldset class="normalInput">
              <label for="${temp.labelFor}" class="labelName">${temp.labelText}</label>
              <input type="date" class="inputBox" name="${temp.labelFor}" id="${temp.labelFor}">
            </fieldset>`
          break;
        case "text":
          formContent += `
            <fieldset class="normalInput">
              <label for="${temp.labelFor}" class="labelName">${temp.labelText}</label>
              <input type="text" class="inputBox" name="${temp.labelFor}" id="${temp.labelFor}" placeholder="${temp.inputPlaceholder}">
            </fieldset>`
          break;
        case "select":
          formContent += `
            <fieldset class="normalInput">
              <label for="${temp.labelFor}" class="labelName">${temp.labelText}</label>
              <select type="text" class="selectBox" name="${temp.labelFor}" id="${temp.labelFor}">`;
          let i = 1;
          temp.optionValue.forEach(option => {
            formContent += `
              <option value="${i}">${option}</option>`
            i++;
          })
          formContent += `
            </select>
            </fieldset>`
          break;
        case "button":
          formContent += `
            <input type="button" id="recordEntry" value="SAVE JOURNAL ENTRY">`;
          break;
        case "radio":
          formContent += `
            <fieldset class="entireRadio">
              <label for="${temp.labelFor}" class="${temp.labelFor}">${temp.labelText}</label>`
          temp.indivButtons.forEach(rdButton => {
            formContent += `
                <section class="indivBox">
                  <label for="${rdButton.labelFor}" class="radioName">${rdButton.labelText}</label>
                  <input type="radio" class="radioBox" name="${rdButton.labelFor}" id="${rdButton.labelFor}">
                </section>`
          })
          formContent += `
            <input type="button" id="filterJournal" value="FILTER JOURNAL">
            </fielset>`
          break;
      }
    })
    formContent += "</form>";
    $("#blockForm").html(formContent);
  }
};

module.exports = DOM
},{}],4:[function(require,module,exports){
const API = require("./data");
const RECORD = require("./entriesDom")

let moodCheckRadio = {};

const EVENTS = {
  record () {
    $("#recordEntry").on("click", RECORD.recordEntry);
  },
  findMatch () {
    $("#filterJournal").on("click", API.findMatches);
  },
  clearRad () {
    $(".radioBox").on("click", EVENTS.clearRadio);
  },
  clearRadio(moodNow) {
    
    console.log(moodNow);
    if (moodNow.target.name === "clearMood") {
      let allButtons =[]
      allButtons = $(".radioBox");
      console.log("in")
      console.log(allButtons)
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].checked = false;
      };
      console.log(allButtons);
    } 
  }
}

module.exports = EVENTS
},{"./data":1,"./entriesDom":2}],5:[function(require,module,exports){
const DOM = require("./entryComponent")
const API = require("./data")
const EVENTS = require("./events")

DOM.insertForm();
API.getJournalEntries().then(posts => DOM.renderJournalEntries(posts)).then(() => {
  EVENTS.record();
  EVENTS.findMatch();
  EVENTS.clearRad();
});
console.log(DOM.renderJournalEntries);

},{"./data":1,"./entryComponent":3,"./events":4}]},{},[5]);

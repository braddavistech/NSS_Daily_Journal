const DOM = {
  renderJournalEntries(temp) {
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
  insertForm(inputFields) {
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
                  <input type="radio" class="${temp.className}" value="${rdButton.value}" name="${rdButton.labelFor}" id="${rdButton.labelFor}">
                </section>`
          })
          if (temp.labelFor === "buttonBoxName") {
          formContent += `
            <input type="button" id="filterJournal" value="FILTER JOURNAL">
            </fielset>`
          } else {
            formContent += "</fielset>"
          }
          break;
      }
    })
    formContent += "</form>";
    $("#blockForm").html(formContent);
}
};

module.exports = DOM
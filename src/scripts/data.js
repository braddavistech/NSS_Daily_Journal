const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries")
      .then(entries => entries.json())
  },
  saveJournalEntries(temp) {
    fetch('http://localhost:8088/entries', { // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(temp)
    })
  },
  findMatches() {
    return fetch("http://localhost:8088/entries")
      .then(entries => entries.json())
      .then(entries => {
        let eraser = document.getElementById("journalPrintPlaceholder");
        while (eraser.firstChild) {
          eraser.removeChild(eraser.firstChild);
        }
        entries.filter(entry => {
          let moods = []
          let moodElements = document.getElementsByClassName("indivBox");
          for (let i = 0; i < moodElements.length; i++) {
            let selected = moodElements[i].childNodes[1].checked;
            if (selected === true) {
              let moodValue = i;
              if (moodValue == 0) {
                for (let i = 0; i < moodElements.length; i++) {
                  let tempNumber = i;
                  let allNumber = tempNumber.toString();
                  moods.push(allNumber);
                }
              } else {
                let tempString = moodValue.toString();
                moods.push(tempString)
              }
            }
          }
          let tempValue = entry.journalMood;
          if (moods.indexOf(tempValue) != -1) {
            DOM.renderJournalEntries(entry);
          }
        })
      });
  }
}


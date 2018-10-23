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
            if (moodValue == 0) {
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


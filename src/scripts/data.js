const DOM = require("./entryComponent")

const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries")
      .then(entries => entries.json())
  },

  getForms() {
    return fetch("http://localhost:8088/inputFields")
      .then(inputs => inputs.json())
  },

  saveJournalEntries(temp, tags) {
    return fetch('http://localhost:8088/entries', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(temp)
    })
    .then(contacts => contacts.json())
    .then(recent => {
      if (tags.length === 0) {
        console.log("no tags")
        return;
      } else {tags.forEach (tag => {
        console.log("many tags", tag)
        let itemTag = {};
        itemTag.tagName = tag;
        itemTag.journalId = recent.id;
        API.postTag(itemTag);
      })};
    })
    .then(() => API.getJournalEntries())
  },

  postTag(temp) {
    console.log
      fetch(`http://localhost:8088/entriesTags`, {
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
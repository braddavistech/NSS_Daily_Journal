const API = {
  getJournalEntries () {
    return fetch("http://localhost:8088/entries")
      .then(entries => entries.json())
    },
  postJournalEntries (temp) {
    fetch('http://localhost:8088/entries', { // Replace "url" with your API's URL
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(temp)
    })
  }
}


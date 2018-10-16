API.getJournalEntries().then(posts => oldPosts(posts));

document.getElementById("recordEntry").addEventListener("click", RECORD.recordEntry);
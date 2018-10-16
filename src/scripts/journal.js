API.getJournalEntries().then(posts => oldPosts(posts)).then(DOM.insertForm()).then(document.getElementById("recordEntry").addEventListener("click", RECORD.recordEntry));

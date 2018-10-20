$(document).ready(function () {
  DOM.insertForm();
  API.getJournalEntries().then(posts => DOM.renderJournalEntries(posts));
});
const DOM = require("./entryComponent")
const API = require("./data")
const EVENTS = require("./events")
const GRABAPI = require("./printSearch")

API.getForms()
.then(inputs => DOM.insertForm(inputs));
API.getJournalEntries().then(posts => DOM.renderJournalEntries(posts)).then(() => {
  EVENTS.record();
  EVENTS.findMatch();
  EVENTS.clearRad();
});

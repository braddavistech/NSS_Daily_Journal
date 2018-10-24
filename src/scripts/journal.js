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

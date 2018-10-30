const GRABAPI = {
  printSearch(temp) {
    const DOM = require("./entryComponent")
    DOM.renderJournalEntries(temp);
  }
};

module.exports = GRABAPI;
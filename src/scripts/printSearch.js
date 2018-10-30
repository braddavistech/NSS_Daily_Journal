// const API = require("./data")

const GRABAPI = {
  printSearch(temp) {
    const DOM = require("./entryComponent")
    console.log(DOM);
    console.log(temp);
    DOM.renderJournalEntries(temp);
  }
};

module.exports = GRABAPI;
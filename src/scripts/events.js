const API = require("./data");
const RECORD = require("./entriesDom")

let moodCheckRadio = {};

const EVENTS = {
  record () {
    $("#recordEntry").on("click", RECORD.recordEntry);
  },
  findMatch () {
    $("#filterJournal").on("click", API.findMatches);
  },
  clearRad () {
    $(".radioBox").on("click", EVENTS.clearRadio);
  },
  clearRadio(moodNow) {
    if (moodNow.target.name === "clearMood") {
      let allButtons =[]
      allButtons = $(".radioBox");
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].checked = false;
      };
    }
  }
}

module.exports = EVENTS
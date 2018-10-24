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
    
    console.log(moodNow);
    if (moodNow.target.name === "clearMood") {
      let allButtons =[]
      allButtons = $(".radioBox");
      console.log("in")
      console.log(allButtons)
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].checked = false;
      };
      console.log(allButtons);
    } 
  }
}

module.exports = EVENTS
const Direwolf = require("./direwolf");

class Stark {
  constructor(personObj) {
    this.name = personObj.name;
    this.location = personObj.area;
    if (this.location === undefined) {
      this.location = "Winterfell";
    }
    this.safe = false;
  }

sayHouseWords() {
  if (this.safe) {
    return "The North Remembers"
  }
  return "Winter is Coming"
}

callDirewolf(direwolf) {
  this.safe = true;
  direwolf.starksToProtect.push(this);
  direwolf.home = this.location;
}
}


module.exports = Stark;
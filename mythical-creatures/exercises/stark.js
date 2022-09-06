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

callDirewolf(name, location) {
  let newDirewolf = new Direwolf(name, location);
  this.safe = true;
  newDirewolf.home = this.location;
  newDirewolf.protect(this);
  return newDirewolf;
}
}


module.exports = Stark;
class Direwolf {
  constructor(name, home = "Beyond the Wall", size = "Massive") {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(obj) {
    if (this.starksToProtect.length === 2) { return };
    if (this.home === obj.location) {
    this.starksToProtect.push(obj);
    obj.safe = true;
    this.huntsWhiteWalkers = false;
    }
  }

  leave(obj) {
    this.starksToProtect = [];
    obj.safe = false;
  }
}

module.exports = Direwolf;
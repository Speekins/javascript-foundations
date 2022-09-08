const Human = require('../exercises/human');

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || "Swamp";
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()){
      this.swingAt();
    }
    if (this.swings % 2 === 0) {
      human.knockedOut = true;
    }
  }

  swingAt() {
      this.swings += 1;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
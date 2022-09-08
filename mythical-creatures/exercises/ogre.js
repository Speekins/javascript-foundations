const Human = require('../exercises/human');

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || "Swamp";
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter += 1;
  }

  swingAt(human) {
    if (human.encounterCounter >= 3 && human.encounterCounter % 3 === 0) {
      this.swings += 1;
    }
  }
}

module.exports = Ogre;
class Centaur {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.bowShots = 0;
  }

  shootBow() {
    this.bowShots += 1;
    if (this.bowShots > 3 || !!this.cranky) { 
      this.cranky = true;
      this.bowShots = 0;
      return 'NO!';
    } else if (!!this.layingDown) { return 'NO!'}
    return 'Twang!!!';
  }

  run() {
    if (!!this.cranky || this.bowShots >= 3 || !!this.layingDown) {
      return 'NO!';
    }
    this.cranky = true;
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing) { return 'NO!'};
    this.cranky = false;
    return 'ZZZZ'
  }

  layDown() {
    if (this.standing === true) {
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp() {
    if (this.layingDown === true) {
      this.layingDown = false;
      this.standing = true;
    }
  }

  drinkPotion() {
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
    this.cranky = false;
  }
}

module.exports = Centaur;
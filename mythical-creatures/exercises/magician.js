class Magician {
  constructor(object) {
    this.name =  `The Great ${object.name}`;
    this.assistant = object.assistant;
    this.favoriteAccessory = 'top hat';
    if (!!object.clothing) {
      this.favoriteAccessory = object.clothing;
    }
    this.confidencePercentage = 10;
  }

  performIncantation(phrase) {
    return phrase.toUpperCase() + '!';
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || !this.assistant) {
      return 'Oh no, this trick is not ready!'
    } else if (!!this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
}

module.exports = Magician;
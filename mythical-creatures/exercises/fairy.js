class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris'],
    };
    this.disposition = "Good natured";
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dressesArray) {
    this.clothes.dresses = 
    this.clothes.dresses.concat(dressesArray);
  }

  becomeProvoked() {
    this.disposition = "Vengeful";
  }

  replaceInfant(infant) {
    infant.disposition = "Malicious";
  }
}

module.exports = Fairy;
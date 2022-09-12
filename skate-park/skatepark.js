class SkatePark {
  constructor(skatePark) {
    this.name = skatePark.name;
    this.yearFounded = skatePark.year;
    this.style = skatePark.type;
    this.features = skatePark.features;
    this.isPrivate = skatePark.isPrivate || false;
    this.cost = skatePark.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if (this.occupants.length === 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
    if (this.cost > skater.money) {
      return `Sorry, you don't have enough money.`;
    }
    if (this.cost === 0) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    }

    skater.money -= this.cost;
    this.occupants.push(skater);
    return `Welcome to ${this.name}, the cost will be $12.00.`
  }
}
module.exports = SkatePark;
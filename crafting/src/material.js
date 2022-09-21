class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units
  }

  useMaterial(amountToUse) {
    if (amountToUse > this.amount) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
    this.amount -= amountToUse;
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`
  }

  calculateMaterialCost() {
    return this.amount * this.price;
  }
}

module.exports = Material;

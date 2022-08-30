class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatTimes = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.eatTimes += 1;
    if (this.eatTimes === 3) {
      this.hungry = false;
    }
  }
}


module.exports = Dragon;
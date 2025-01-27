var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person) {
    if (this.statues.length === 3) {
      this.statues.push(new Statue(person.name));
      var unstonedPerson = this.statues.shift().name;
      return new Person(unstonedPerson, 'relieved');
    }

    this.statues.push(new Statue(person.name)); 
  }
}

module.exports = Medusa;
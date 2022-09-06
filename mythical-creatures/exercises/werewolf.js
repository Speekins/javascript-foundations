var Victim = require('./victim')

class Werewolf {
  constructor(name, form = 'human') {
    this.name = name;
    this.form = form;
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form === 'human') {
    this.form = 'wolf';
    this.hungry = true;
    return 'Aaa-Woooo!';
    } else { 
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?'
    }
  }

  eatVictim(victim) {
    var victimName = victim.name;
    if (this.form === 'human') {
      return `No way am I eating ${victimName}, I'd like a burger!`
    }
    victim.alive = false;
    this.form = 'human';
    return `Yum, ${victimName} was delicious.`
  }
}

module.exports = Werewolf;
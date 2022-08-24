class Sphinx {
  constructor(name){
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.push(riddle);
      this.riddles.shift();
    } else {
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(attempt) {
    let correctAttempt;
    for (let idx = 0; idx < this.riddles.length; idx++) {
      if (this.riddles[idx].answer === attempt) {
        correctAttempt = idx;
      }
    }
    if (correctAttempt !== undefined) {
      this.riddles.splice(correctAttempt, 1);
      return 'That wasn\'t that hard, I bet you don\'t get the next one'
    } else { this.heroesEaten += 1 };
  }
}

module.exports = Sphinx;
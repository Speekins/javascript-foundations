class Roadrace {
  constructor(race) {
    this.name = race.title;
    this.location = race.city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(miles) {
    this.distance = miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants(participant) {
    this.participants.push(participant);
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      var participant = this.participants[i];
      participant.runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;

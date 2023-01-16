const Bee = require("./Bee");

class HoneyMakerBee extends Bee {
  constructor(age, job) {
    super(age, job);
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot += 1;
  }
  giveHoney() {
    this.honeyPot -= 1;
  }
}
module.exports = HoneyMakerBee;

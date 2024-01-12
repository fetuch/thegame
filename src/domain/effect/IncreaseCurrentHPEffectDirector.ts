import type { Hero } from "../hero/Hero";

interface Effect {
  execute(): void;
}

export default class IncreaseCurrentHP implements Effect {
  private target: Hero;

  constructor(Hero: Hero) {
    this.target = Hero;
  }

  execute(): void {
    this.target.increaseCurrentHP(10);
  }
}

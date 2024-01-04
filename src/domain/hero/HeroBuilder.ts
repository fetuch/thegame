import type { iHero } from "./Hero";
import { Hero } from "./Hero";
import type { iRace } from "../race/Race";
import type { iItem } from "../item/Item";

export interface iHeroBuilder {
  Hero: iHero;

  setRace(race: iRace): this;
  setName(name: string): this;
  setDescription(description: string): this;
  getResult(): iHero;
}

export default class HeroBuilder implements iHeroBuilder {
  Hero: iHero;

  constructor() {
    this.Hero = new Hero();
  }

  setRace(race: iRace): this {
    this.Hero.setRace(race);
    return this;
  }

  setName(name: string): this {
    this.Hero.setName(name);
    return this;
  }

  setDescription(description: string): this {
    this.Hero.setDescription(description);
    return this;
  }

  equipItem(item: iItem): this {
    this.Hero.equipItem(item);
    return this;
  }

  getResult(): iHero {
    return this.Hero;
  }
}

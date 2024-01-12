import { Hero } from "./Hero";
import type { iRace } from "../race/Race";
import type { iItem } from "../item/Item";
import type { Skill } from "../skill/Skill";

export interface iHeroBuilder {
  Hero: Hero;

  setRace(race: iRace): this;
  setName(name: string): this;
  setDescription(description: string): this;
  getResult(): Hero;
}

export default class HeroBuilder implements iHeroBuilder {
  Hero: Hero;

  constructor(race: iRace) {
    this.Hero = new Hero(race);
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

  addSkill(skill: Skill): this {
    this.Hero.addSkill(skill);
    return this;
  }

  getResult(): Hero {
    return this.Hero;
  }
}

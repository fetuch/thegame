import type { iAttribute, iHero, iHeroBuilder } from "@/api/types";
import Hero from "@/hero/Hero";

export default class HeroBuilder implements iHeroBuilder {
  Hero: iHero;

  constructor() {
    this.Hero = new Hero();
  }

  setRace(race: string): this {
    this.Hero.race = race;
    return this;
  }

  setName(name: string): this {
    this.Hero.name = name;
    return this;
  }

  setDescription(description: string): this {
    this.Hero.description = description;
    return this;
  }

  setAttribute(newAttribute: iAttribute): this {
    const attributeIndex = this.Hero.attributes.findIndex(
      (obj) => obj.name == newAttribute.name
    );
    this.Hero.attributes[attributeIndex].value = newAttribute.value;

    return this;
  }

  getResult(): iHero {
    return this.Hero;
  }
}

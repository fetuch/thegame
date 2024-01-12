import type { iItem } from "../item/Item";
import type { iRace, Attributes } from "../race/Race";
import type { Skill } from "../skill/Skill";

export type HeroEquipment = {
  head?: iItem;
  chest?: iItem;
  hands?: iItem;
  legs?: iItem;
  feet?: iItem;
  neck?: iItem;
  leftRing?: iItem;
  rightRing?: iItem;
  leftHand?: iItem;
  rightHand?: iItem;
};

export class Hero {
  private race: iRace;
  private name?: string;
  private description = "";
  private equipment: HeroEquipment;
  private currentHP: number;
  private skills: Skill[] = [];

  constructor(race: iRace) {
    this.race = race;

    this.equipment = {
      head: undefined,
      chest: undefined,
      hands: undefined,
      legs: undefined,
      feet: undefined,
      neck: undefined,
      leftRing: undefined,
      rightRing: undefined,
      leftHand: undefined,
      rightHand: undefined,
    };

    this.currentHP = this.getMaxHP();
  }

  public getRace(): string {
    return this.race?.name ?? "undefined race";
  }

  public getName(): string {
    return this.name ?? "unedfined name";
  }

  public getDescription(): string {
    return this.description;
  }

  public getAttributes(): Attributes {
    return this.race.attributes;
  }

  public getMaxHP(): number {
    let maxHp = this.race.attributes.constitution * 10;

    Object.entries(this.equipment).forEach(([slot, item]) => {
      if (item) {
        item
          .getEffects()
          .filter((effect) => effect.name === "hp")
          .forEach((effect) => (maxHp += effect.value));
      }
    });

    return maxHp;
  }

  public getCurrentHP(): number {
    return this.currentHP;
  }

  public getMaxMana(): number {
    return (
      this.race.attributes.intelligence * 10 + this.race.attributes.wisdom * 5
    );
  }

  public getEquipment(): HeroEquipment {
    return this.equipment;
  }

  public getDefence(): number {
    let defence = this.race.attributes.dexterity * 5;

    Object.entries(this.equipment).forEach(([slot, item]) => {
      if (item) {
        item
          .getEffects()
          .filter((effect) => effect.name === "defence")
          .forEach((effect) => (defence += effect.value));
      }
    });

    return defence;
  }

  public getAttack(): number {
    let attack = this.race.attributes.strength * 5;

    Object.entries(this.equipment).forEach(([slot, item]) => {
      if (item) {
        item
          .getEffects()
          .filter((effect) => effect.name === "attack")
          .forEach((effect) => (attack += effect.value));
      }
    });

    return attack;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  public setRace(race: iRace) {
    this.race = race;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public addSkill(skill: Skill) {
    this.skills = [...this.skills, skill];
  }

  public equipItem(item: iItem) {
    if (
      Object.keys(this.equipment).some(
        (slot) => slot === item.getEquipableSlot()
      )
    ) {
      this.equipment[item.getEquipableSlot()] = item;
    }

    return this;
  }

  // move to effect class
  public decreaseCurrentHP(amount: number) {
    this.currentHP -= amount;
  }

  public increaseCurrentHP(amount: number) {
    this.currentHP += amount;
  }

  public useSkill(skill: Skill, target: iHero) {
    skill.apply(target);
  }
}

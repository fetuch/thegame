import type { iItem } from "../item/Item";
import type { iRace, Attributes } from "../race/Race";

type heroEquipment = {
  head?: iItem;
  chest?: iItem;
  left_hand?: iItem;
};

export interface iHero {
  getRace(): string;
  getName(): string;
  getDescription(): string;
  getAttributes(): Attributes;
  getMaxHP(): number;
  getMaxMana(): number;
  getEquipment(): heroEquipment;
  getDefence(): number;
  getAttack(): number;
  setRace(race: iRace): void;
  setName(name: string): void;
  setDescription(description: string): void;
  equipItem(item: iItem): void;
}

export class Hero implements iHero {
  private race: iRace;
  private name?: string;
  private description = "";
  private equipment: heroEquipment;

  constructor(race: iRace) {
    this.race = race;

    this.equipment = {
      head: undefined,
      chest: undefined,
      left_hand: undefined,
    };
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
    // return (
    //   (this.race?.attributes?.find(
    //     (attribute) => attribute.name === "constitution"
    //   )?.value ?? 0) * 10
    // );
    return this.race.attributes.constitution * 10;
  }

  public getMaxMana(): number {
    // return (
    //   (this.race?.attributes?.find(
    //     (attribute) => attribute.name === "intelligence"
    //   )?.value ?? 0) *
    //     10 +
    //   (this.race?.attributes?.find((attribute) => attribute.name === "wisdom")
    //     ?.value ?? 0) *
    //     5
    // );

    return (
      this.race.attributes.intelligence * 10 + this.race.attributes.wisdom * 5
    );
  }

  public getEquipment(): heroEquipment {
    return this.equipment;
  }

  public getDefence(): number {
    let defence = this.race.attributes.dexterity * 5;

    Object.entries(this.equipment).forEach(([slot, item]) => {
      item
        .getEffects()
        .filter((effect) => effect.name === "defence")
        .forEach((effect) => (defence += effect.value));
    });

    return defence;
  }

  public getAttack(): number {
    let attack = this.race.attributes.strength * 5;

    Object.entries(this.equipment).forEach(([slot, item]) => {
      item
        .getEffects()
        .filter((effect) => effect.name === "attack")
        .forEach((effect) => (attack += effect.value));
    });

    return attack;
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
}

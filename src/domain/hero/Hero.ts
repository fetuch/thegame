import type { iItem } from "../item/Item";
import type { iRace } from "../race/Race";

type attributeNames =
  | "strength"
  | "aglity"
  | "intelligence"
  | "wisdom"
  | "condition";

export interface iAttribute {
  name: attributeNames;
  value: number;
}

type heroEquipment = {
  head?: iItem;
  chest?: iItem;
  left_hand?: iItem;
};

export interface iHero {
  getRace(): string;
  getName(): string;
  getDescription(): string;
  getMaxHP(): number;
  getMaxMana(): number;
  getEquipment(): heroEquipment;
  setRace(race: iRace): void;
  setName(name: string): void;
  setDescription(description: string): void;
  equipItem(item: iItem): void;
}

export class Hero implements iHero {
  private race?: iRace;
  private name?: string;
  private description = "";
  // private equipment: iItem[];
  private equipment: heroEquipment;

  constructor() {
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

  public getMaxHP(): number {
    return (
      (this.race?.attributes?.find(
        (attribute) => attribute.name === "constitution"
      )?.value ?? 0) * 2
    );
  }

  public getMaxMana(): number {
    return (
      (this.race?.attributes?.find(
        (attribute) => attribute.name === "intelligence"
      )?.value ?? 0) *
        10 +
      (this.race?.attributes?.find((attribute) => attribute.name === "wisdom")
        ?.value ?? 0) *
        5
    );
  }

  getEquipment(): heroEquipment {
    return this.equipment;
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
    // this.equipment["chest"] = item;
    return this;
  }
}

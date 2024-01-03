import type { iRace } from "../race/race";

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

export interface iHero {
  getRace(): string;
  getName(): string;
  getDescription(): string;
  getMaxHP(): number;
  getMaxMana(): number;
  setRace(race: iRace): void;
  setName(name: string): void;
  setDescription(description: string): void;
}

export class Hero implements iHero {
  private race?: iRace;
  private name?: string;
  description = "";

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
        (attribute) => attribute.name === "condition"
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

  public setRace(race: iRace) {
    this.race = race;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setDescription(description: string) {
    this.description = description;
  }
}

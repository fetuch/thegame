/**
 * The Item interface
 */

/**
 * Types:potion, weapon, armour
 *
 * Item params: defence + 20, strength +3, attack + 10
 *
 * Requirements: aglity 6, inteligence 7
 *
 * Equipable Slot: head, chest, left hand
 *
 */

export type itemType = "potion" | "weapon" | "armor";

type effectName =
  | "defence"
  | "attack"
  | "hp"
  | "mana"
  | "strength"
  | "dexterity"
  | "intelligence"
  | "wisdom"
  | "constitution";

export interface iItemEffect {
  name: effectName;
  value: number;
}

export type equipableSlot = "head" | "chest" | "lefHand" | null;

export interface iItem {
  getType(): itemType;
  getName(): string;
  getDescription(): string;
  getEffects(): iItemEffect[];
  getEquipableSlot(): equipableSlot;
  setName(name: string): void;
  setDescription(description: string): void;
  addEffect(effect: iItemEffect): void;
  setEquipableSlot(slot: equipableSlot): void;
}

export class Item implements iItem {
  private type: itemType;
  private name?: string;
  private description = "";
  private effects: iItemEffect[];
  private equipableSlot?: equipableSlot;

  constructor(type: itemType) {
    this.type = type;
    this.effects = [];
  }

  public getType(): itemType {
    return this.type;
  }

  public getName(): string {
    return this.name ?? "unedfined name";
  }

  public getDescription(): string {
    return this.description;
  }

  public getEffects(): iItemEffect[] {
    return this.effects ?? [];
  }

  public getEquipableSlot(): equipableSlot {
    return this.equipableSlot ?? null;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public addEffect(effect: iItemEffect) {
    this.effects = [...this.effects, effect];
  }

  public setEquipableSlot(slot: equipableSlot) {
    this.equipableSlot = slot;
  }
}

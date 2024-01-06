export type DamageType = "physical" | "fire" | "lightning" | "cold";

export class Skill {
  private name = "";
  private description = "";
  private minDamage = 0;
  private maxDamage = 0;
  private damageType?: DamageType;
  private manaCost = 0;
  // private effects: []  // paralise, drop weapon, burning, healing, blind, lower resist, higher resist

  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setMinDamage(damage: number): void {
    this.minDamage = damage;
  }

  setMaxDamage(damage: number): void {
    this.maxDamage = damage;
  }

  setDamageType(damageType: DamageType): void {
    this.damageType = damageType;
  }

  setManaCost(manaCost: number): void {
    this.manaCost = manaCost;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getDamageType(): DamageType | undefined {
    return this.damageType;
  }

  getDamage(): number {
    return Math.random() * (this.maxDamage - this.minDamage) + this.minDamage;
  }

  getManaCost(): Number {
    return this.manaCost;
  }
}

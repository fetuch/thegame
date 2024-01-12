// export type DamageType = "physical" | "fire" | "lightning" | "cold";

import type { Effect } from "../effect/Effect";

export type SkillEffect = {
  effect: Effect;
  min: number;
  max: number;
};

export class Skill {
  private name = "";
  private description = "";
  private manaCost = 0;
  private onEnterEffects: SkillEffect[] = [];
  private onTickEffects: SkillEffect[] = [];
  private onExitEffects: SkillEffect[] = [];
  private duration = 0;

  // private minDamage = 0;
  // private maxDamage = 0;
  // private damageType?: DamageType;

  // private effects: []  // paralise, drop weapon, burning, healing, blind, lower resist, higher resist

  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setManaCost(manaCost: number): void {
    this.manaCost = manaCost;
  }

  setOnEnterEffects(effects: SkillEffect[]): void {
    this.onEnterEffects = effects;
  }

  setOnTickEffects(effects: SkillEffect[]): void {
    this.onTickEffects = effects;
  }

  setOnExitEffects(effects: SkillEffect[]): void {
    this.onExitEffects = effects;
  }

  setDuration(duration: number): void {
    this.duration = duration;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  // getDamage(): number {
  //   return Math.random() * (this.maxDamage - this.minDamage) + this.minDamage;
  // }

  getManaCost(): Number {
    return this.manaCost;
  }

  getOnEnterEffects(): SkillEffect[] {
    return this.onEnterEffects;
  }

  getOnTickEffects(): SkillEffect[] {
    return this.onTickEffects;
  }

  getOnExitEffects(): SkillEffect[] {
    return this.onExitEffects;
  }

  getDuration(): number {
    return this.duration;
  }
}

import { Skill, type DamageType } from "./Skill";

export default class SkillBuilder {
  Skill: Skill;

  constructor() {
    this.Skill = new Skill();
  }

  setName(name: string): this {
    this.Skill.setName(name);
    return this;
  }

  setDescription(description: string): this {
    this.Skill.setDescription(description);
    return this;
  }

  setMinDamage(damage: number) {
    this.Skill.setMinDamage(damage);
    return this;
  }

  setMaxDamage(damage: number) {
    this.Skill.setMaxDamage(damage);
    return this;
  }

  setDamageType(damageType: DamageType) {
    this.Skill.setDamageType(damageType);
    return this;
  }

  setManaCost(manaCost: number) {
    this.Skill.setManaCost(manaCost);
    return this;
  }

  getResult(): Skill {
    return this.Skill;
  }
}

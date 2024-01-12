/**
 * SkillBuilder is a class that helps in building instances of Skill.
 */
import { Skill, type SkillEffect } from "./Skill";

export default class SkillBuilder {
  Skill: Skill;

  /**
   * Constructs a new SkillBuilder instance.
   */
  constructor() {
    this.Skill = new Skill();
  }

  /**
   * Sets the name of the skill.
   * @param name - The name of the skill.
   * @returns The SkillBuilder instance.
   */
  setName(name: string): this {
    this.Skill.setName(name);
    return this;
  }

  /**
   * Sets the description of the skill.
   * @param description - The description of the skill.
   * @returns The SkillBuilder instance.
   */
  setDescription(description: string): this {
    this.Skill.setDescription(description);
    return this;
  }

  /**
   * Sets the mana cost of the skill.
   * @param manaCost - The mana cost of the skill.
   * @returns The SkillBuilder instance.
   */
  setManaCost(manaCost: number): this {
    this.Skill.setManaCost(manaCost);
    return this;
  }

  /**
   * Sets the on-enter effects of the skill.
   * @param effects - The on-enter effects of the skill.
   * @returns The SkillBuilder instance.
   */
  setOnEnterEffects(effects: SkillEffect[]): this {
    this.Skill.setOnEnterEffects(effects);
    return this;
  }

  /**
   * Sets the on-tick effects of the skill.
   * @param effects - The on-tick effects of the skill.
   * @returns The SkillBuilder instance.
   */
  setOnTickEffects(effects: SkillEffect[]): this {
    this.Skill.setOnTickEffects(effects);
    return this;
  }

  /**
   * Sets the on-exit effects of the skill.
   * @param effects - The on-exit effects of the skill.
   * @returns The SkillBuilder instance.
   */
  setOnExitEffects(effects: SkillEffect[]): this {
    this.Skill.setOnExitEffects(effects);
    return this;
  }

  /**
   * Sets the duration of the skill.
   * @param duration - The duration of the skill.
   * @returns The SkillBuilder instance.
   */
  setDuration(duration: number): this {
    this.Skill.setDuration(duration);
    return this;
  }

  /**
   * Gets the built Skill instance.
   * @returns The built Skill instance.
   */
  getResult(): Skill {
    return this.Skill;
  }
}

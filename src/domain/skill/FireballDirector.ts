import type { Skill } from "./Skill";
import SkillBuilder from "./SkillBuilder";

export default class FireballDirector {
  static construct(): Skill {
    return new SkillBuilder()
      .setName("Fireball")
      .setDescription(
        "Unleash the arcane fury of the Fireball skill, conjuring a searing sphere that hurtles through the air, engulfing foes in a blazing inferno upon impact."
      )
      .setMinDamage(10)
      .setMaxDamage(20)
      .setDamageType("fire")
      .setManaCost(10)
      .getResult();
  }
}

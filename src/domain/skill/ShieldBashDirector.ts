import type { Skill } from "./Skill";
import SkillBuilder from "./SkillBuilder";

export default class ShieldBashDirector {
  static construct(): Skill {
    return new SkillBuilder()
      .setName("Shield Bash")
      .setDescription(
        "A forceful bash with a shield, stunning enemies and providing a defensive advantage."
      )
      .setMinDamage(5)
      .setMaxDamage(10)
      .setDamageType("physical")
      .setManaCost(5)
      .getResult();
  }
}

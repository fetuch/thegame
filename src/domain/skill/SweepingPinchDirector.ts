import type { Skill } from "./Skill";
import SkillBuilder from "./SkillBuilder";

export default class SweepingPuchDirector {
  static construct(): Skill {
    return new SkillBuilder()
      .setName("Sweeping Punch")
      .setDescription(
        "The sweeping punch skill unleashes a powerful and wide-arching blow, embodying raw strength and precision, capable of staggering foes and turning the tide of battle for brawny characters like orcs and dwarves."
      )
      .setMinDamage(12)
      .setMaxDamage(17)
      .setDamageType("physical")
      .setManaCost(4)
      .getResult();
  }
}

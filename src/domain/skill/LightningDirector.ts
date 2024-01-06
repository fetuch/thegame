import type { Skill } from "./Skill";
import SkillBuilder from "./SkillBuilder";

export default class LightningDirector {
  static construct(): Skill {
    return new SkillBuilder()
      .setName("Lightning")
      .setDescription(
        "The lightning skill crackles with raw arcane energy, allowing wielders to unleash a storm of electrifying power upon their foes, leaving a dazzling display of chaos in its wake."
      )
      .setMinDamage(1)
      .setMaxDamage(30)
      .setDamageType("lightning")
      .setManaCost(10)
      .getResult();
  }
}

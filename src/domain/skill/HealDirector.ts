import IncreaseCurrentHP from "../effect/IncreaseCurrentHPEffectDirector";
import type { Skill } from "./Skill";
import SkillBuilder from "./SkillBuilder";

const increaseHP = new IncreaseCurrentHP();
// q: need to somehow pass heal amount to effect passed to skill

export default class HealDirector {
  static construct(): Skill {
    return new SkillBuilder()
      .setName("Heal")
      .setDescription(
        "Heals the target for 10% of their maximum health every second for 5 turns."
      )
      .setManaCost(10)
      .setDuration(5)
      .setOnEnterEffects([{ effect: increaseHP, min: 5, max: 10 }])
      .setOnTickEffects([{ effect: increaseHP, min: 5, max: 10 }])
      .setOnExitEffects([{ effect: increaseHP, min: 15, max: 25 }])
      .getResult();
  }
}

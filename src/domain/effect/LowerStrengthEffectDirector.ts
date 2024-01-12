import type { Effect } from "./Effect";
import EffectBuilder from "./EffectBuilder";

export default class LowerStrengthEffectDirector {
  static construct(): Effect {
    return new EffectBuilder()
      .setName("Lower Strength")
      .setDescription("Decreases the target's strength.")
      .getResult();
  }
}

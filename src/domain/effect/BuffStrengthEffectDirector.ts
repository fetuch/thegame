import type { Effect } from "./Effect";
import EffectBuilder from "./EffectBuilder";

export default class BuffStrengthEffectDirector {
  static construct(): Effect {
    return new EffectBuilder()
      .setName("Buff Strength")
      .setDescription("Increases the target's strength.")
      .getResult();
  }
}

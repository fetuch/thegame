import type { Effect } from "./Effect";
import EffectBuilder from "./EffectBuilder";

export default class BurnEffectDirector {
  static construct(): Effect {
    return new EffectBuilder()
      .setName("Burn")
      .setDescription("Burns the target.")
      .getResult();
  }
}

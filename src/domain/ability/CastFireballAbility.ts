import type { Effect } from "../effect/Effect";
import type { Hero } from "../hero/Hero";
// private effects: []  // paralise, drop weapon, burning, healing, blind, lower resist, higher resist

export class CastFireballAbitity {
  targets?: Hero[];
  entryEffect?: Effect;
  tickEffect?: Effect;
  leaveEffect?: Effect;
  duration: number = 0;
  removableBy?: Effect;
}

import type { iRace } from "./Race";
import type { Attributes } from "./Race";

export class Human implements iRace {
  name = "Human";

  attributes: Attributes = {
    strength: 7,
    dexterity: 5,
    intelligence: 5,
    wisdom: 5,
    constitution: 7,
  };
}

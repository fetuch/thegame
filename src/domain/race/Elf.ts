import type { iRace } from "./Race";
import type { Attributes } from "./Race";

export class Elf implements iRace {
  name = "Elf";

  attributes: Attributes = {
    strength: 4,
    dexterity: 8,
    intelligence: 6,
    wisdom: 6,
    constitution: 4,
  };
}

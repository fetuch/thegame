import type { iRace } from "./Race";
import type { iAttribute } from "./Race";

export class Elf implements iRace {
  name = "Elf";

  attributes: iAttribute[] = [
    {
      name: "strength",
      value: 4,
    },
    {
      name: "dexterity",
      value: 8,
    },
    {
      name: "intelligence",
      value: 7,
    },
    {
      name: "wisdom",
      value: 6,
    },
    {
      name: "constitution",
      value: 4,
    },
  ];
}

import type { iRace } from "./race";
import type { iAttribute } from "./race";

export class Elf implements iRace {
  name = "Elf";

  attributes: iAttribute[] = [
    {
      name: "strength",
      value: 4,
    },
    {
      name: "aglity",
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
      name: "condition",
      value: 4,
    },
  ];
}

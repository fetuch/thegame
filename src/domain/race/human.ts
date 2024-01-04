import type { iRace } from "./race";
import type { iAttribute } from "./race";

export class Human implements iRace {
  name = "Human";

  attributes: iAttribute[] = [
    {
      name: "strength",
      value: 6,
    },
    {
      name: "dexterity",
      value: 5,
    },
    {
      name: "intelligence",
      value: 5,
    },
    {
      name: "wisdom",
      value: 5,
    },
    {
      name: "constitution",
      value: 6,
    },
  ];
}

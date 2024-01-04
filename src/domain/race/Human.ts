import type { iRace } from "./Race";
import type { iAttribute } from "./Race";

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

import type { iHero, iAttribute } from "@/api/types";

export default class Hero implements iHero {
  race = "";
  name = "";
  description = "";

  attributes: iAttribute[] = [
    {
      name: "strength",
      value: 5,
    },
    {
      name: "aglity",
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
      name: "condition",
      value: 5,
    },
  ];

  get maxHP(): number {
    return (
      (this.attributes?.find((attribute) => attribute.name === "condition")
        ?.value ?? 0) * 2
    );
  }

  get maxMana(): number {
    return (
      (this.attributes?.find((attribute) => attribute.name === "intelligence")
        ?.value ?? 0) *
        10 +
      (this.attributes?.find((attribute) => attribute.name === "wisdom")
        ?.value ?? 0) *
        5
    );
  }
}

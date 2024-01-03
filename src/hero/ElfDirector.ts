import type { iAttribute, iHero } from "@/api/types";
import HeroBuilder from "@/hero/HeroBuilder";

export default class HeroElfDirector {
  static construct(): iHero {
    return new HeroBuilder()
      .setRace("Elf")
      .setName("Elandril Moonshadow")
      .setDescription(
        "An elf of unmatched grace, possesses extraordinary dexterity for precise bowmanship and nimble spellcasting. His low strength is overshadowed by a keen intellect, making him a strategic genius who navigates both physical and magical challenges with finesse."
      )
      .setAttribute({
        name: "strength",
        value: 4,
      } as iAttribute)
      .setAttribute({
        name: "aglity",
        value: 8,
      } as iAttribute)
      .setAttribute({
        name: "intelligence",
        value: 7,
      } as iAttribute)
      .getResult();
  }
}

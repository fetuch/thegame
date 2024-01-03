import type { iHero } from "@/api/types";
import HeroBuilder from "@/domain/hero/HeroBuilder";

export default class HeroHumanDirector {
  static construct(): iHero {
    return new HeroBuilder()
      .setRace("Human")
      .setName("Sample Human")
      .setDescription("Just ordinary human beeing.")
      .getResult();
  }
}

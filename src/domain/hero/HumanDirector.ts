import type { iHero } from "./Hero";
import HeroBuilder from "./HeroBuilder";
import { Human } from "../race/Human";
import DaggerDirector from "../item/DaggerDirector";

export default class HeroHumanDirector {
  static construct(): iHero {
    return (
      new HeroBuilder(new Human())
        // .setRace(new Elf()) //strategy pattern
        .setName("Base Human")
        .setDescription("An ordinary human beeing.")
        .equipItem(DaggerDirector.construct())
        .getResult()
    );
  }
}

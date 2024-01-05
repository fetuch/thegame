import type { iHero } from "./Hero";
import HeroBuilder from "./HeroBuilder";
import { Elf } from "../race/Elf";
import LeatherHelmDirector from "../item/LeatherHelmDirector";
import BrassArmorDirector from "../item/BrassArmorDirector";
import DaggerDirector from "../item/DaggerDirector";

export default class HeroElfDirector {
  static construct(): iHero {
    return new HeroBuilder(new Elf())
      .setName("Elandril Moonshadow")
      .setDescription(
        "An elf of unmatched grace, possesses extraordinary dexterity for precise bowmanship and nimble spellcasting. His low strength is overshadowed by a keen intellect, making him a strategic genius who navigates both physical and magical challenges with finesse."
      )
      .equipItem(LeatherHelmDirector.construct())
      .equipItem(BrassArmorDirector.construct())
      .equipItem(DaggerDirector.construct())
      .getResult();
  }
}

import type { iItem } from "./item";
import ItemBuilder from "./itemBuilder";

export default class DaggerDirector {
  static construct(): iItem {
    return new ItemBuilder("weapon")
      .setName("Elven Dagger")
      .setDescription(
        "Crafted with ethereal elegance, the elven dagger features a slender, curved blade forged from enchanted silver, gleaming like moonlight. Its hilt, adorned with delicate runes, is a testament to elven craftsmanship, allowing swift, silent strikes that dance through the shadows."
      )
      .setEquipableSlot("left hand")
      .getResult();
  }
}

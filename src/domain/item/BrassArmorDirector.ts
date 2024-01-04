import type { iItem } from "./Item";
import ItemBuilder from "./ItemBuilder";

export default class BrassArmorDirector {
  static construct(): iItem {
    return new ItemBuilder("armor")
      .setName("Brass Armor")
      .setDescription(
        "The brass chestplate, adorned with elven filigree and dwarven runes, melds elegant aesthetics with sturdy protection, embodying the harmonious collaboration of races in its design."
      )
      .setEquipableSlot("chest")
      .addEffect({
        name: "defence",
        value: 20,
      })
      .getResult();
  }
}

import type { iItem } from "./Item";
import ItemBuilder from "./ItemBuilder";

export default class LeatherHelmDirector {
  static construct(): iItem {
    return new ItemBuilder("armor")
      .setName("Leather Helm")
      .setDescription(
        "The leather helm, fashioned with expert care, offers a blend of comfort and resilience, providing adventurers with a lightweight yet durable headgear for their fantastical journeys."
      )
      .setEquipableSlot("head")
      .addEffect({
        name: "defence",
        value: 10,
      })
      .getResult();
  }
}

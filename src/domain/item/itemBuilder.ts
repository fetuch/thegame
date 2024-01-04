import type { iItem, itemType, iItemEffect, equipableSlot } from "./item";
import { Item } from "./item";

export interface iItemBuilder {
  Item: iItem;
  getResult(): iItem;
}

export default class ItemBuilder implements iItemBuilder {
  Item: iItem;

  constructor(type: itemType) {
    this.Item = new Item(type);
  }

  setName(name: string): this {
    this.Item.setName(name);
    return this;
  }

  setDescription(description: string): this {
    this.Item.setDescription(description);
    return this;
  }

  addEffect(effect: iItemEffect): this {
    this.Item.addEffect(effect);

    return this;
  }

  public setEquipableSlot(slot: equipableSlot) {
    this.Item.setEquipableSlot(slot);
    return this;
  }

  getResult(): iItem {
    return this.Item;
  }
}

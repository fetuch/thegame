import { Effect } from "./Effect";

export default class EffectBuilder {
  Effect: Effect;

  constructor() {
    this.Effect = new Effect();
  }

  setName(name: string): this {
    this.Effect.setName(name);
    return this;
  }

  setDescription(description: string): this {
    this.Effect.setDescription(description);
    return this;
  }

  getResult(): Effect {
    return this.Effect;
  }
}

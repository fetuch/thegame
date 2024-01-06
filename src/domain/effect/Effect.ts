export class Effect {
  private name = "";
  private description = "";
  target: Hero;

  // private effects: []  // paralise, drop weapon, burning, healing, blind, lower resist, higher resist

  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }
}

interface ingredient {
  name: string;
  measure: string;
}
export interface Drink {
  id: number;
  name: string;
  category: string;
  glass: string;
  instructions: string;
  ingredients: ingredient[];
  dateAdded: string;
}
export interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}
export interface Category {
  id: number;
  name: string;
}

export interface iHero {
  race: string;
  name: string;
  description: string;
  maxHP: number;
  currentHP?: number;
  maxMana: number;
  currentMana?: number;

  attributes: iAttribute[];
}

type attributeNames =
  | "strength"
  | "aglity"
  | "intelligence"
  | "wisdom"
  | "condition";

export interface iAttribute {
  name: attributeNames;
  value: number;
}

export interface iAbility {
  name: string;
  value: number;
}

export interface iHeroBuilder {
  Hero: iHero;

  setRace(race: string): this;
  setName(name: string): this;
  setDescription(description: string): this;
  getResult(): iHero;
}

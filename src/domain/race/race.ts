/**
 * The Race interface
 */

type attributeNames =
  | "strength"
  | "dexterity"
  | "intelligence"
  | "wisdom"
  | "constitution";

export interface iAttribute {
  name: attributeNames;
  value: number;
}

export interface iRace {
  name: string;
  attributes: iAttribute[];
}

/**
 * The Race interface
 */

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

export interface iRace {
  name: string;
  attributes: iAttribute[];
}

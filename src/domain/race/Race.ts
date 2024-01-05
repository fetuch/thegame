/**
 * The Race interface
 */

// type attributeNames =
//   | "strength"
//   | "dexterity"
//   | "intelligence"
//   | "wisdom"
//   | "constitution";

// export interface iAttribute {
//   name: attributeNames;
//   value: number;
// }

export type Attributes = {
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  constitution: number;
};

export type iRace = {
  name: string;
  attributes: Attributes;
};

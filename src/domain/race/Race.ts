/**
 * The Race interface
 */

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

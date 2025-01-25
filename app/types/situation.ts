import { Dispatch, ReactNode, SetStateAction } from "react";
import { SituationNames } from "../constants/mazeData";

type UnremoveableArray<T extends Array<unknown>> = Pick<
  T,
  Exclude<keyof T, "splice" | "pop" | "shift" | "unshift">
>;

export interface Item {
  name: string;
  show: boolean;
  stackable: boolean;
}
export type Inventory = Array<Item>;

export type SituationHistory = UnremoveableArray<Array<SituationNames>>;
export type Action = {
  description: string;
  component: (props: {
    inventory: Inventory;
    setInventory: Dispatch<SetStateAction<Inventory>>;
    situationHistory: SituationHistory;
    setSituationHistory: Dispatch<SetStateAction<SituationHistory>>;
  }) => ReactNode;
};
export interface Situation {
  description: string;
  possibleActions: Array<Action>;
}

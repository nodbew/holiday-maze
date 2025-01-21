import { Dispatch, SetStateAction } from "react";
import { SITUATIONS } from "../constants/mazeData";

type UnremoveableArray<T extends Array<unknown>> = Pick<
  T,
  Exclude<keyof T, "splice" | "pop" | "shift" | "unshift">
>;

export interface Item {
  name: string;
  show: boolean;
}
export type Inventory = Array<Item>;

export type SituationName = keyof typeof SITUATIONS;
export type SituationHistory = UnremoveableArray<Array<SituationName>>;
interface Action {
  description: string;
  callback: (
    inv: Inventory,
    setInv: Dispatch<SetStateAction<Inventory>>,
    situationHistory: SituationHistory,
    setSituationHistory: Dispatch<SetStateAction<SituationHistory>>
  ) => void;
}
export interface Situation {
  description: string;
  possibleActions: Array<Action>;
}

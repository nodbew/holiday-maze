import { ITEMS } from "../data";

export interface Item<Name extends string> {
  name: Name;
  show: boolean;
  stackable: boolean;
}
export type Inventory = Array<Item<keyof typeof ITEMS>>;
